"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { METHODS } from "@/app/constants";

export const getAllCategories = async () => {
  const res = await api.query(
    endpoints.jobCategories.getAllCategories,
    "jobCategories"
  );
  return res?.data;
};

export const addJobCategory = async data => {
  const result = await api.mutation(
    endpoints.jobCategories.addCategory,
    data,
    METHODS.POST
  );
  return result;
};
