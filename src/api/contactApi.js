import { createApiClient } from "./apiUtils";

export const contactsApi = {
  fetchContacts: async (contactId) => {
    console.log(localStorage.getItem("token"));
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/contacts/getContactLists", {
      contact_id: contactId,
    });
  },
  searchContact: async (searchString) => {
    const apiClient = createApiClient(localStorage.getItem("token"));
    return apiClient.post("/contacts/search", {
      username: searchString,
    });
  },
  LoginContact: async (username, password) => {
    const apiClient = createApiClient();
    return apiClient
      .post("/contacts/login", {
        username,
        password,
      })
      .then((response) => {
        return response;
      });
  },
};
