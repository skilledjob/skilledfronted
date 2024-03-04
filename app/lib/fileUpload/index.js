"use client";

import cookies from "@/app/utils/cookies";
import axios from "axios";

export const fileUpload = async (endpoint, data, method) => {
  const res = await axios({
    method: method,
    url: endpoint,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });
  return res;
};

// export const uploadStore=async()=>{
//   const responce=await api.mutation()
// }
// export const updateProfile = async (id = null, data) => {
//   const userId = id || (await getCurrentUserId());
//   const response = await api.mutation(
//     endpoints.jobSeeker.updateJobSeeker,
//     data,
//     METHODS.PATCH,
//     jobSeekerCache.tags.jobSeekerById(userId)
//   );
//   return response;
// };
