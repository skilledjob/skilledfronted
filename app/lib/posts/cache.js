import { revalidateTag } from "next/cache";

export const postsCache = {
  tag: {
    all() {
      return `posts:all`;
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
