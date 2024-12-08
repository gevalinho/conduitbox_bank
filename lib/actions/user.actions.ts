"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = userData;

    // Validate inputs to avoid undefined names
    if (!firstName || !lastName) {
      throw new Error("First name and last name are required");
    }

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName.trim()} ${lastName.trim()}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.log("Error", error);
  }
};

export const signIn = async ({ email, password }: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(session);
  } catch (error) {
    console.log("Error", error);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return error;
  }
}
