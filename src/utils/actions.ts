"use server";

import { signIn } from "@/auth";

export const authenticate = async (email: string, password: string) => {
  try {
    const result = await signIn("credentials", { email, password, redirect: false });
    return result;
  } catch (error : any) {
    error = error as Error;
    return {
      error: true,
      name: error?.name,
      type: error?.type,
      code: error?.code
    };
  }
};
