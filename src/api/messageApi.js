import { createApiClient } from "./apiUtils";

export const messageApi = {
  fetchMessages: async (group_id) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/messages/fetchMessages", {
      group_id: group_id,
    });
  },
  fetchLastMessages: async (group_id) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/messages/last", {
      group_id: group_id,
    });
  },
};
