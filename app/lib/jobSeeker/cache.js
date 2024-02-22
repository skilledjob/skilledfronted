export const jobSeekerCache = {
  tags: {
    all() {
      return `jobSeeker:all`;
    },
    jobSeekerById(id) {
      return `jobSeeker:jobSeekerById:${id}`;
    },
  },
};
