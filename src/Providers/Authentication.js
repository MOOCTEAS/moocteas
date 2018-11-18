import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { history } from '../Router/history';
import { base, auth } from '../rebase.config';
import { googleAuthenticationProvider } from "../firebase.config.js";

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

  componentWillMount() {

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
    this.signInWithGooglePopup();
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
