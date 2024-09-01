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
  SignupContact: async (
    firstName,
    lastName,
    phoneNumber,
    username,
    password
  ) => {
    const apiClient = createApiClient();
    return apiClient
      .post("/contacts", {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        username,
        password,
      })
      .then((response) => {
        return response;
      });
  },
};
