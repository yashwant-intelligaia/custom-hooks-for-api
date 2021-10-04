const axios = require("axios");
const makeAxiosOptions = (options) => {
  const {
    data = null,
    url = "",
    method = "get",
    timeout = 30 * 1000,
    params: parameters = "",
    headers = {}
  } = options;
  return {
    url,
    method,
    params: parameters,
    data,
    mimeType: "multipart/form-data",
    timeout,
    headers
  };
};
const api = (options) => axios(makeAxiosOptions(options));

export { api };
