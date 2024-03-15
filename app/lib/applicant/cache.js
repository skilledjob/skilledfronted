import { revalidateTag } from "next/cache";

export const applicantCache = {
  tag: {
    all() {
      return `applicantAll:all`;
    },
    byId(id) {
      return `applicant:${id}`;
    },
  },
  revalidateAll() {
    revalidateTag(this.tag.all());
  },
  revalidateById(id) {
    revalidateTag(this.tag.byId(id));
  },
};
