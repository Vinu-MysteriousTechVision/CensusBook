class LoginController {
  constructor() {

  }

  loginRequest(loginId, password, loginSuccessCallback, loginErrorCallback) {
    var isLogin = true;
    if (isLogin) {
      loginSuccessCallback();
    } else {
      loginErrorCallback();
    }
  }
}

module.exports = LoginController;
