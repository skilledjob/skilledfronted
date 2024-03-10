"use server";
import { endpoints } from "@/app/common";
import api from "../api";
import { jobPostsCache } from "./cache";
import { METHOD } from "@/app/constants";

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
    METHOD.POST
  );
  return res;
};

export const updateJob = async (id, data) => {
  const result = await api.mutation(
    endpoints.jobPost.updateJob(id),
    data,
    METHOD.PATCH
  );
  return result;
};
