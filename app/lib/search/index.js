"use server";

import { endpoints } from "@/app/common";
import api from "../api";

export const getSearchedJobSeekers = async (
  category,
  keyword,
  userId,
  page,
  limit
) => {
  let searchCategory = "";
  let searchKeyword = "";
  let searchUserId = "";
  let searchPage = 1;
  let searchLimit = 10;

  if (category) {
    searchCategory = category;
  }

  if (keyword) {
    searchKeyword = keyword;
  }
  if (userId) {
    searchUserId = userId;
  }

  if (page) {
    searchPage = page;
  }

  if (limit) {
    searchLimit = limit;
  }

  const response = await api.query(
    endpoints.search.searchJobSeekers(
      searchKeyword,
      searchCategory,
      searchUserId,
      searchPage,
      searchLimit
    ),
    "search"
  );
  return response;
};
