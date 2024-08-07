import { http } from "@/utils/axios/http";

export const api_getHomeGoodPriceData = () => {
  return http.GET({ url: "/home/goodprice" });
};

export function api_getHomeHighScoreData() {
  return http.GET({
    url: "/home/highscore",
  });
}

export function api_getHomeDiscountData() {
  return http.GET({
    url: "/home/discount",
  });
}

export function api_getHomeHotRecommendData() {
  return http.GET({
    url: "/home/hotrecommenddest",
  });
}

export function api_getHomeLongforData() {
  return http.GET({
    url: "/home/longfor",
  });
}

export function api_getHomePlusData() {
  return http.GET({
    url: "/home/plus",
  });
}
