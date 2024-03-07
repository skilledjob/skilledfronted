const { revalidateTag } = require("next/cache");

export const allBannerCache = {
  tag: {
    all() {
      return `allBanner:all`;
    },
    byId(id) {
      return `banner:${id}`;
    },
  },
  revalidateAll() {
    revalidateTag(this.tag.all());
  },
  revalidaById(id) {
    revalidateTag(this.tag.byId(id));
  },
};
