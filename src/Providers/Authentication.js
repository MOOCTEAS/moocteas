import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { history } from '../Router/history';
import { base, auth } from '../rebase.config';
import { googleAuthenticationProvider } from "../firebase.config.js";

import { sleep } from "../utils/sleep";

export class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasUser: false,
      loading: true,
      language: 'en',
      isAdmin: false,
      firebaseUser: {},
    };
  }

  async componentWillMount() {
    const { firebaseUser } = this.state;
    const isLoggedOut = !Object.keys(firebaseUser).length;
    console.log('firebaseUser', firebaseUser);
    console.log('isLoggedOut', isLoggedOut);
    await sleep(5000);
    const result = await this.signInWithRedirect();
    console.log(result);
      /*
      if (user) {
        this.setState({
          hasUser: true, loading: false, firebaseUser: user,
        });

        this.ref = base.listenTo(`authentication/userOwned/${user.uid}/preferences`, {
          context: this,
          asArray: false,
          then(userOptions) {
            const language = userOptions.language || 'en';
            this.setState({
              language,
            });
          },
        });

        base.fetch(`authentication/admins/${user.uid}`, {
          context: this,
          asArray: true,
          onFailure: (err) => {
            console.log(err);
            this.setState({
              isAdmin: false,
            });
          },
          then() {
            this.setState({
              isAdmin: true,
            });
          },
        });
      } else {
        this.setState({
          hasUser: false, loading: false,
        });
        history.push('/');
      }
    };
    */
  }

  componentDidMount() {
    this.signInWithGoogleRedirect();
  }

  componentWillUnmount() {
    // to remove auth listener

  }

  signInWithGoogleRedirect() {
    auth.signInWithRedirect(googleAuthenticationProvider);
  }

  async signInWithGooglePopup() {
    const result = await auth.signInWithPopup(googleAuthenticationProvider);
    console.log(result);
  }

  async signInWithRedirect() {
    let result;
    try {
      result = await auth.getRedirectResult();
      const { user, credential, operationType, email } = result;
      console.log('user', user);
      console.log('credential', credential);
      console.log('operationType', operationType);
      console.log('email', email);
      this.setState({
        hasUser: true, loading: false, firebaseUser: user,
      }, () => { console.log(this.state)});
      return 'success';
    } catch (error) {
      const { email, credential, code } = error;
      auth.fetchProvidersForEmail(email).then(function(providers) {
        // The returned 'providers' is a list of the available providers
        // linked to the email address. Please refer to the guide for a more
        // complete explanation on how to recover from this error.
        console.log(providers);
        console.log(email);
        console.log(credential);
        console.log(code);
      });
    }
  }

  render() {
    const { children } = this.props;
    const {
      hasUser, loading, language, firebaseUser, isAdmin,
    } = this.state;
    const {
      displayName, photoURL,
    } = firebaseUser;



    return (
      <Fragment>
        { React.cloneElement(children, {
          language,
          hasUser,
          isAdmin,
          displayName,
          photoURL,
          loading
        })}
      </Fragment>
    );
  }
}

Authentication.propTypes = {
  children: PropTypes.node,
};

Authentication.defaultProps = {
  children: <div/>,
};
