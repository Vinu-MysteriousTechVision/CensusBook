

function apiCall(method, header, parameter, url, callback) {
  try {
    if(method === 'GET' && header) {
      var apiData = {
        'method': method,
        'headers': header
      };
    } else if (header) {
      var apiData = {
        'method': method,
        'headers': header,
        'body': JSON.stringify(parameter)
      };
    } else {
      var apiData = {
        'method': method,
        'body': JSON.stringify(parameter)
      };
    }
    console.log('URL :: '+url);
    console.log('BODY :: '+JSON.stringify(parameter));
    console.log('Header :: '+JSON.stringify(header));
    fetch(url, apiData)
              .then(
                  function(response) {
                    console.log('API call response');
                    var status = response.status;
                    var resHeaders = response.headers;
                    console.log('Response Status: ' + status);
                    console.log('Response Header: ' + JSON.stringify(resHeaders));
                    console.log('Response  ' + JSON.stringify(response));
                    response.json().then(function(responseJson) {
                      console.log('Response Body: ' + JSON.stringify(responseJson));
                      if (response.status === 200) {
                        callback(responseJson, null, response.status, resHeaders);
                      } else {
                        callback(null, responseJson, response.status, resHeaders);
                      }
                    });
                  }
              )
              .catch((error) => {
                  //console.log('API call error');
                callback(null, error, null, null);
              }).done();
  } catch (error) {
      //console.log('API call error');
    callback(null, error, null, null);
  }
}

function multipartApiCall(method, header, formData, url, callback) {
  try {
    if (header) {
      var apiData = {
        'method': method,
        'headers': header,
        'body': formData
      };
    } else {
      var apiData = {
        'method': method,
        'body': formData
      };
    }
          //console.log('Header :: '+JSON.stringify(header));
    fetch(url, apiData)
              .then(
                  function(response) {
                      //console.log('API call response');
                    var status = response.status;
                    var resHeaders = response.headers;
//                       console.log('Response Status: ' + status);
//                       console.log('Response Header: ' + JSON.stringify(resHeaders));
                    response.json().then(function(responseJson) {
//                           console.log('Response Body: ' + JSON.stringify(responseJson));
                      if (response.status === 200) {
                        callback(responseJson, null, response.status, resHeaders);
                      } else {
                        callback(null, responseJson, response.status, resHeaders);
                      }
                    });
                  }
              )
              .catch((error) => {
                  //console.log('API call error');
                callback(null, error, null, null);
              }).done();
  } catch (error) {
      //console.log('API call error');
    callback(null, error, null, null);
  }
}

module.exports = {
  apiCall,
  multipartApiCall
};
