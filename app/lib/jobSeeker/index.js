"use server";

import { endpoints } from "@/app/common";
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
