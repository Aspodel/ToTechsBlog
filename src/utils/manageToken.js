const Token = "Token";

export const storeToken = (data) => {
  localStorage.setItem(Token, data);
};

export const removeToken = () => {
  localStorage.removeItem(Token);
};

export const getToken = () => {
  return localStorage.getItem(Token);
};

export const isLogin = () => {
  checkExpired();
  if (localStorage.getItem(Token)) {
    return true;
  }

  return false;
};

const decodeJWT = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

const checkExpired = () => {
  var token = getToken();
  if (token) {
    var exp_time = decodeJWT(token).exp * 1000;
    var now = Date.now();
    if (exp_time <= now) {
      removeToken();
    }
  }
};
