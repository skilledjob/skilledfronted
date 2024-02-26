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
