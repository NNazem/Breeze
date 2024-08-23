import { createApiClient } from "./apiUtils";

export const createGroupMemberApi = {
  createGroupMember: async (contact_id, other_contact_id, group_id) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    apiClient.post("/groupMembers", {
      contact_id,
      group_id: group_id,
    });
    return apiClient.post("/groupMembers", {
      contact_id: other_contact_id,
      group_id: group_id,
    });
  },
};
