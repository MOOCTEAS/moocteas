import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { history } from '../Router/history';
import { auth } from '../rebase.config';


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
    const that = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        history.push("/");
      } else {
        that.setState({
          firebaseUser: null,
          hasUser: false,
        }, () => { console.log(that.state)})
        history.push("/logout");
      }
    });

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

    const user = await auth.getRedirectResult().then(function(result) {
      return result.user;
    }, function(error) {
      console.log('error', error);
    });

    if (user) {
      const { displayName, photoURL } = user;

      this.setState({
        hasUser: true, loading: false, firebaseUser: { displayName, photoURL },
      });
    }

  }

  render() {

    const { children } = this.props;

    const {
      hasUser, loading, language, firebaseUser, isAdmin,
    } = this.state;

    console.log(this.state);

    if (firebaseUser === null) {
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
