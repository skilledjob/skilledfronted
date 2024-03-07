"use server";

import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import api from "../api";
import { allBannerCache } from "./cache";

export const addBanner = async data => {
  const response = await api.mutation(
    endpoints.addBanner.uploadBanner,
    data,
    METHODS.POST,
    allBannerCache.tag.all()
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
    METHODS.PATCH,
    allBannerCache.tag.byId(id)
  );
  return result;
};
export const deleteBanner = async (id, data) => {
  const result = await api.mutation(
    endpoints.addBanner.deleteBanner(id),
    data,
    METHODS.DELETE,
    allBannerCache.tag.all()
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
