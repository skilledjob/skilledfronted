const makeApiUrl = path => `${process.env.API_URL}/${path}`;

export const endpoints = {
  auth: {
    login: makeApiUrl("auth/login"),
    register: makeApiUrl("auth/register"),
    forgotPassword: makeApiUrl("auth/forgot-password"),
    // verifyEmail: makeApiUrl("auth/verify-email"),
    resetPassword(token) {
      return makeApiUrl(`auth/reset-password?token=${token}`);
    },
    verfiyAccount(token) {
      return makeApiUrl(`auth/verify-email?token=${token}`);
    },
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
