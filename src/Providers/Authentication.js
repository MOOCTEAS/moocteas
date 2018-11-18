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
      firebaseUser: null,
    };
  }

  async componentWillMount() {
    await this.signInWithRedirect();
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

  async componentDidMount() {

  }

  async signInWithRedirect() {
    console.log('91');
    let result;
    try {
      console.log('93')
      await sleep(5000);
      result = auth.getRedirectResult();
      console.log('result', result);
      const { user } = result.i;
      console.log('user', user);
      this.setState({
        hasUser: true, loading: false, firebaseUser: user,
      }, () => { console.log('line 101', this.state)});
      return 'success';
    } catch (error) {
      console.log('105');
      console.log('error', error);
    }
    console.log('117')
  }

  render() {

    console.log(this.state);

    const { children } = this.props;

    const {
      hasUser, loading, language, firebaseUser, isAdmin,
    } = this.state;

    if (this.state.firebaseUser === null) {
      return (
        <Fragment>
          { React.cloneElement(children, {
            language,
            hasUser,
            isAdmin,
            loading
          })}
        </Fragment>
      )
    }

    const {
      displayName, photoURL
    } = firebaseUser;

    console.log(this.state);

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
