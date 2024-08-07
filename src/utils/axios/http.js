import AxiosClass from "./index";
import { BASE_URL, TIMEOUT } from "./base";
export const http = new AxiosClass(BASE_URL, TIMEOUT);
