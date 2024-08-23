import { createApiClient } from "./apiUtils";

export const groupApi = {
  createGroup: async (username1, username2) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/messageGroups", {
      group_name: username1 + " - " + username2,
    });
  },
  fetchGroupId: async (contact_id1, contact_id2) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/groupMembers/searchId", {
      contact_id_1: contact_id1,
      contact_id_2: contact_id2,
    });
  },
};
