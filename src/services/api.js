export const authAPI = {
  api_login: async (credentials) => {
    return fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return { error: error.message };
      });
  },

  api_signup: async (credentials) => {
    return fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return { error: error.message };
      });
  },
};
