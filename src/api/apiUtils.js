const API_BASE_URL = "http://localhost:8081";

export const createApiClient = (token) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return {
    get: (endpoint, options = {}) => {
      return fetch(`${API_BASE_URL}${endpoint}`, {
        ...defaultOptions,
        ...options,
        method: "GET",
      }).then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      });
    },
    post: (endpoint, body, options = {}) => {
      return fetch(`${API_BASE_URL}${endpoint}`, {
        ...defaultOptions,
        ...options,
        method: "POST",
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      });
    },
    delete: (endpoint, body, options = {}) => {
      return fetch(`${API_BASE_URL}${endpoint}`, {
        ...defaultOptions,
        ...options,
        method: "DELETE",
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      });
    },
  };
};
