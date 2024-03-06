import { revalidateTag } from "next/cache";

export const categorisTag = {
  tag: {
    all() {
      return `categoris:all`;
    },
    byId(id) {
      return `categoris:${id}`;
    },
  },
  revalidateAll() {
    revalidateTag(this.tag.all());
  },
  revalidateById(id) {
    revalidateTag(this.tag.byId(id));
  },
};
