"use server";

import { endpoints } from "@/app/common";
import api from "../api";

export const getSearchedJobSeekers = async (category, keyword, userId) => {
  let searchCategory = "";
  let searchKeyword = "";
  let searchUserId = "";
  if (category) {
    searchCategory = category;
  }

  if (keyword) {
    searchKeyword = keyword;
  }
  if (userId) {
    searchUserId = userId;
  }

  const response = await api.query(
    endpoints.search.searchJobSeekers(
      searchKeyword,
      searchCategory,
      searchUserId
    ),
    "search"
  );
  return response;
};
