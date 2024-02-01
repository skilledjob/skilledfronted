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

// /**
//  * Performs a mutation (HTTP request that modifies data) to the specified endpoint with the provided payload.
//  * Optionally revalidates a cache key after the mutation.
//  *
//  * @param {string} endpoint - The URL endpoint for the mutation.
//  * @param {Object} payload - The payload to be sent with the mutation request.
//  * @param {string} method - The HTTP method for the mutation (e.g., 'POST', 'PUT', 'DELETE').
//  * @param {string|null} revalidateCacheKey - The cache key to be revalidated after the mutation (optional).
//  * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from the mutation.
//  * @throws {Error} If there is an issue with the network request or parsing the response.
//  * @example
//  * const data = await mutation("/api/users", { name: "John Doe" }, METHOD.POST, "users");
//  */
export const mutation = async (endpoint, data, method, revalidateCacheKey) => {
  const respnse = await fetch(endpoint, {
    method: method,
    body: JSON.stringify(data),
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
