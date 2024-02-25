"use server";

import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import api from "../api";
import { jobSeekerCache } from "./cache";

const { cookies } = require("next/headers");

const currentUserId = cookies()?.get("id")?.value;

export const getJobSeekerProfileById = async (id = "") => {
  const userId = id || currentUserId;
  const response = await api.query(
    endpoints.jobSeeker.jobSeekerById(userId),
    jobSeekerCache.tags.jobSeekerById(userId)
  );
  return response;
};

export const uplaodResume = async file => {
  const response = await api.mutation(
    endpoints.jobSeeker.uplaodResume,
    file,
    "PATCH",
    jobSeekerCache.tags.jobSeekerById(currentUserId)
  );
  return response;
};

export const deleteVideoResume = async id => {
  const response = await api.mutation(
    endpoints.jobSeeker.deleteVideoResume(id),
    null,
    METHODS.DELETE,
    jobSeekerCache.tags.jobSeekerById(currentUserId)
  );
  return response;
};

export const updateProfile = async (id = null, data) => {
  const userId = id || currentUserId;
  const response = await api.mutation(
    endpoints.jobSeeker.updateJobSeeker,
    data,
    METHODS.PATCH,
    jobSeekerCache.tags.jobSeekerById(userId)
  );
  return response;
};

export const revalidateJobSeekerProfile = (id = null) => {
  const userId = id || currentUserId;
  jobSeekerCache.revalidate.byId(userId);
};
