import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// /**
//  * Performs a query to the specified endpoint with an access token retrieved from the server session.
//  *
//  * @param {string} endpoint - The URL endpoint to query.
//  * @param {string} cacheKey - The cache key associated with the query for caching purposes.
//  * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from the query.
//  * @throws {Error} If there is an issue with the network request or parsing the response.
//  * @example
//  * const data = await query("/api/users", "users");
//  */
export const query = async (endpoint, cacheKey) => {
  const response = await fetch(endpoint, {
    method: "GET",
    next: {
      tags: [cacheKey],
    },
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
  });
  return await response.json();
};

export const mutation = async (endpoint, data, method, revalidateCacheKey) => {
  const respnse = await fetch(endpoint, {
    method: method,
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${cookies().get("token")?.value}`,
    },
  });
  if (revalidateCacheKey) {
    revalidateTag(revalidateCacheKey);
  }
  return await respnse.json();
};

const api = {
  query,
  mutation,
};

export default api;
