"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { METHODS } from "@/app/constants";
import { allBannerCache } from "./cache";

export const addBanner = async data => {
  const response = await api.mutation(
    endpoints.addBanner.uploadBanner,
    data,
    METHODS.POST
  );
  return response;
};
export const getAllBanner = async () => {
  const res = await api.query(
    endpoints.addBanner.getAllBanner,
    allBannerCache.tag.all()
  );
  return res?.data?.results;
};
