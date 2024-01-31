import { revalidateTag } from "next/cache";

export const postsCache = {
  tag: {
    all() {
      return `posts:all`;
    },
  },
  revalidate() {
    revalidateTag(this.tag.all());
  },
};
