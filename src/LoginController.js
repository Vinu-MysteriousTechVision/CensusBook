import Client from './api/HttpClient';
import HttpHeader from './api/HttpHeader';
import ApiUrl from './api/ApiUrl';
import { User } from './entities';

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

    var parameter = {
      'email': loginId.trim(),
      'password': password
    };
    this.loginApiRequest(parameter);

  }

  async loginApiRequest(parameter) {
    var onResponse = function(response, errorResponse, responseStatus, responseHeaders) {
      try {
        if (response && responseHeaders && responseStatus === 200) {
          alert('api Success');

          var authDetails = {
            "Access-Token" : responseHeaders.get('access-token'),
            "Client" : responseHeaders.get('client'),
            "Uid" : responseHeaders.get('uid')
          };
          var user = new User(response.user, false);
          if (!_.isUndefined(user) && !_.isNull(user)) {
            var userDetails = {
              "avatar_url" : ((!_.isUndefined(user.imageurl) && !_.isNull(user.imageurl)) ? user.imageurl : ''),
              "avatar_thumb_url" : ((!_.isUndefined(user.thumbimage_url) && !_.isNull(user.thumbimage_url)) ? user.thumbimage_url : ''),
              "username" : user.full_name,
              "user_id" : user.id
            };

            const multi_set_data   = [[Constant.AUTH_ACCESS_DETAILS, JSON.stringify(authDetails)],
                                            [Constant.USER_DETAILS, JSON.stringify(userDetails)],
                                            [Constant.USER_AUTHENTICATED, Constant.STORAGE_YES]];
            AsyncStorage.multiSet(multi_set_data, (err) => {
              if (!err) {
                /*Success*/
              } else {
                /*Error*/
              }
            });
          } else {
            /*Error*/
          }

        } else {
          alert('api Error');
          if (this.state.isConnected) {
            if (!_.isUndefined(errorResponse) && !_.isNull(errorResponse) && !_.isUndefined(responseStatus) && !_.isNull(responseStatus)) {
              var error = errorResponse.Error;

            } else {
              /*Invalid response*/
            }
          } else {
            /*No network*/
          }
        }
      } catch (error) {
        /*Catch error*/
      }
    };
    var header = await HttpHeader.getHeader(true);
    Client.apiCall('POST', header, parameter, ApiUrl.SOKONOKADO_LOGIN, onResponse.bind(this));
  }

}

module.exports = LoginController;
