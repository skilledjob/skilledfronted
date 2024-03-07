import { endpoints } from "@/app/common";
import api from "../api";
import { jobPostsCache } from "./cache";

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

export const addJobPost = async data => {
  const response = await api.mutation(
    endpoints.jobPost.addJob,
    data,
    jobPostsCache.tag.all()
  );
  return response;
};
