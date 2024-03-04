import { revalidateTag } from "next/cache";

export const jobPostsCache = {
  tag: {
    all() {
      return `jobPosts:all`;
    },
    byId(id) {
      return `posts:${id}`;
    },
  },
  revalidateAll() {
    revalidateTag(this.tag.all());
  },
  revalidateById(id) {
    revalidateTag(this.tag.byId(id));
  },
};
