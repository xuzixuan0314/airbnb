import axios from "axios";
class AxiosClass {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        return error;
      }
    );
  }
  Request(options) {
    return this.instance.request(options);
  }
  GET(options) {
    return this.Request({ ...options, method: "GET" });
  }
  POST(options) {
    return this.Request({ ...options, method: "POST" });
  }
}
export default AxiosClass;
