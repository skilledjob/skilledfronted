"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { jobPostsCache } from "./cache";
import { METHODS } from "@/app/constants";

export const getAllJob = async () => {
  const jobPost = await api.query(
    endpoints.jobPost.getAllJob,
    jobPostsCache.tag.all()
  );
  return jobPost?.data?.results;
};
export const getSingleJObPost = async id => {
  const response = await api.query(
    endpoints.jobPost.getJobById(id),
    jobPostsCache.tag.byId(id)
  );
  return response?.data;
};

export const postJob = async data => {
  const res = await api.mutation(
    endpoints.jobPost.uploadJob,
    data,
    METHODS.POST
  );
  return res;
};

export const updateJob = async (slug, data) => {
  const result = await api.mutation(
    endpoints.jobPost.updateJob(slug),
    data,
    METHODS.PATCH
  );
  return result;
};
