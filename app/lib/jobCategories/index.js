"use server";

import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import api from "../api";
import { categorisTag } from "./cache";

export const getAllCategories = async () => {
  const res = await api.query(
    endpoints.jobCategories.getAllCategories,
    categorisTag.tag.all()
  );
  return res?.data;
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
export const deleteJobCategory = async (id, data) => {
  const result = await api.mutation(
    endpoints.jobCategories.deleteCategory(id),
    data,
    METHODS.DELETE
  );
  return result;
};
