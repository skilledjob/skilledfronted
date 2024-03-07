"use server";

import { endpoints } from "@/app/common";
import api from "../api";

export const getSearchResults = async ({ userId, keyword, jobCategory }) => {
  let url = `${endpoints.search}`;
  let hasQueryParam = false;

  if (keyword) {
    url += `?keyword=${keyword}`;
    hasQueryParam = true;
  }

  if (userId) {
    url += hasQueryParam ? `&userId=${userId}` : `?userId=${userId}`;
    hasQueryParam = true;
  }

  if (jobCategory) {
    url += hasQueryParam
      ? `&jobCategory=${jobCategory}`
      : `?jobCategory=${jobCategory}`;
  }

  const response = await api.query(url, "search");
  return response?.searchResult;
};
