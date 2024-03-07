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
export const updateBanner = async (id, data) => {
  const result = await api.mutation(
    endpoints.addBanner.updateBanner(id),
    data,
    METHODS.PATCH
  );
  return result;
};
export const deleteBanner = async (id, data) => {
  const result = await api.mutation(
    endpoints.addBanner.deleteBanner(id),
    data,
    METHODS.DELETE
  );
  return result;
};
export const singlebanner = async id => {
  const result = await api.query(
    endpoints.addBanner.singleBanner(id),
    allBannerCache.tag.byId(id)
  );
  return result?.data;
};
