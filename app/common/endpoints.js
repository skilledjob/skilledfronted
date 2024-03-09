// const makeApiUrl = path => `${process.env.API_URL}/${path}`;
const makeApiUrl = path => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (process.env.API_URL && process.env.API_URL !== "") {
    baseUrl = process.env.API_URL;
  }

  return `${baseUrl}/${path}`;
};

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
  jobSeeker: {
    jobSeekerById(id) {
      return makeApiUrl(`applicant/${id}`);
    },
    updateJobSeeker: makeApiUrl("applicant/update-my-profile"),
    uplaodResume: makeApiUrl("applicant/upload-resume"),
    uploadVideoResume: makeApiUrl("applicant/upload-video-resume"),
    deleteVideoResume(id) {
      return makeApiUrl(`applicant/delete-video-resume/${id}`);
    },
  },
  jobCategories: {
    getAllCategories: makeApiUrl("job-category"),
    addCategory: makeApiUrl("job-category"),
    deleteCategory(id) {
      return makeApiUrl(`job-category/${id}`);
    },
    updateCategory(id) {
      return makeApiUrl(`job-category/${id}`);
    },
  },
  jobPost: {
    getAllJob: makeApiUrl("job-post"),

    getJobById(id) {
      return makeApiUrl(`job-post/${id}`);
    },
  },
  addBanner: {
    uploadBanner: makeApiUrl("banner-config"),
    getAllBanner: makeApiUrl("banner-config"),
    updateBanner(id) {
      return makeApiUrl(`banner-config/${id}`);
    },
    deleteBanner(id) {
      return makeApiUrl(`banner-config/${id}`);
    },
    singleBanner(id) {
      return makeApiUrl(`banner-config/${id}`);
    },
  },
  fileUpload: {
    upload: makeApiUrl("storage/upload"),
  },
  search: {
    searchJobSeekers(keyword, category, userId, page, limit) {
      let endpoint = `search?keyword=${keyword}&jobCategory=${category}&userId=${userId}`;
      if (page) {
        endpoint += `&page=${page}`;
      }
      if (limit) {
        endpoint += `&limit=${limit}`;
      }
      return makeApiUrl(endpoint);
    },
  },
};
