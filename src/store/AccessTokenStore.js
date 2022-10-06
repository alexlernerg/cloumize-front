let accessToken;

if (typeof window !== "undefined") {
  accessToken = window.sessionStorage.getItem("jwt") || null;
}

export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
  window.sessionStorage.setItem("jwt", token);
  accessToken = token;
};

export const logout = () => {
  sessionStorage.clear();
  window.location.assign("/");
};


export const isTokenValid = (token) => {
  const info = JSON.parse(window.atob(token.split(".")[1]));
  const result = Math.round(Date.now() / 1000) < info.iat;
  return result
};