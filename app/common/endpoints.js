const makeApiUrl = path => `${process.env.API_URL}/${path}`;

export const endpoints = {
  auth: {
    login: makeApiUrl("auth/login"),
    register: makeApiUrl("auth/register"),
    forgotPassword: makeApiUrl("auth/forgot-password"),
    resetPassword: makeApiUrl("auth/reset-password"),
    verifyEmail: makeApiUrl("auth/verify-email"),
  },
  user: {
    userById(id) {
      return makeApiUrl(`users/${id}`);
    },
  },
  post: {
    getPosts: "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5",
  }, // TODO: This is a dummy endpoint. Replace with your own. It is just for demonstration purposes.
};
