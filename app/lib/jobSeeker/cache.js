import { revalidateTag } from "next/cache";

export const jobSeekerCache = {
  tags: {
    all() {
      return `jobSeeker:all`;
    },
    jobSeekerById(id) {
      return `jobSeeker:jobSeekerById:${id}`;
    },
  },
  revalidate: {
    byId(id) {
      revalidateTag(jobSeekerCache.tags.jobSeekerById(id));
    },
  },
};
