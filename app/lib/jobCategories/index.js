"use server";

import { endpoints } from "@/app/common";
import api from "../api";

export const getAllCategories = async () => {
  const res = await api.query(
    endpoints.jobCategories.getAllCategories,
    "jobCategories"
  );
  return res?.data;
};
