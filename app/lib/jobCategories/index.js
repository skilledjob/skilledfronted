"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { METHODS } from "@/app/constants";
import { categorisTag } from "./cache";

export const getAllCategories = async () => {
  const res = await api.query(
    endpoints.jobCategories.getAllCategories,
    categorisTag.tag.all()
  );
  return res?.data;
};

export const getSingleCategory = async id => {
  const result = await api.query(
    endpoints.jobCategories.getSingleCategory(id),
    categorisTag.tag.byId(id)
  );
  return result?.data;
};

export const addJobCategory = async data => {
  const result = await api.mutation(
    endpoints.jobCategories.addCategory,
    data,
    METHODS.POST,
    categorisTag.tag.all()
  );
  return result;
};

export const updateCategory = async (id, data) => {
  const result = await api.mutation(
    endpoints.jobCategories.updateCategory(id),
    data,
    METHODS.PATCH
  );
  return result;
};

export const deleteJobCategory = async (id, data) => {
  const result = await api.mutation(
    endpoints.jobCategories.deleteCategory(id),
    data,
    METHODS.DELETE
  );
  return result;
};
