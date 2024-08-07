import { http } from "@/utils/axios/http";

export function api_getEntireRoomList(offset, size = 20) {
  return http.GET({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
