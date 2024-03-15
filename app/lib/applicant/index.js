"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { applicantCache } from "./cache";

export const getApplicant = async () => {
  const response = await api.query(
    endpoints.categoryWiseApplicant.getApplicant,
    applicantCache.tag.all()
  );
  return response?.data?.results;
};
