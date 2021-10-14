import { UserCredentials } from "../pages/Login";

const URL = process.env.REACT_APP_API_URL;

async function genericFetch(url: string, options?: RequestInit) {
  return await (
    await fetch(url, { ...options, credentials: "include" })
  ).json();
}

async function genericPost(url: string, payload: unknown) {
  return await genericFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function postLoginUser(userCreds: UserCredentials) {
  return await (
    await genericPost(URL + "/login", userCreds)
  ).data;
}

export async function getLogoutUser() {
  return await (
    await genericFetch(URL + "/logout")
  ).data;
}

export async function getValidateCurrToken() {
  return await (
    await genericFetch(URL + "/validate-token")
  ).data;
}
