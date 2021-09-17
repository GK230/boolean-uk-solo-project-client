// import { UserCredentials } from "../pages/Login";

const URL = "http://localhost:3000/";

async function genericFetch(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, { ...options, credentials: "include" });

    if (!response.ok) throw new Error(response.status.toString());

    return await response.json();
  } catch (error) {
    throw error;
  }
}

/* 

You need to use `credentials include` in your fetch options, if you save your JWT token in a HTTP only cookie!! 

fetch(URL, { method: "POST", credentials: "include" });

*/

async function genericPost(url: string, payload: unknown) {
  return await genericFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function getUserPosts() {
  return await (
    await genericFetch(URL + "posts")
  ).data;
}

// export async function postLoginUser(userCreds: UserCredentials) {
//   return await (
//     await genericPost(URL + "login", userCreds)
//   ).data;
// }

export async function getLogoutUser() {
  return await (
    await genericFetch(URL + "logout")
  ).data;
}

export async function getValidateCurrToken() {
  return await (
    await genericFetch(URL + "validate-token")
  ).data;
}
