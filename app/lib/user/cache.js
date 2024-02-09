import { revalidateTag } from "next/cache";

export const userCache = {
  tag: {
    all() {
      return `user:all`;
    },
    userById(id) {
      return `user:currentUser:${id}`;
    },
  },
  revalidateAll() {
    revalidateTag(this.tag.all());
  },
  revalidateById(id) {
    revalidateTag(this.tag.userById(id));
  },
};
