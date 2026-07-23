"use server"

import prisma from "@/lib/prisma"
import { User } from "../generated/prisma/client"

export async function createUser(
  payload: User,
): Promise<{ success: boolean; message: string; data?: User }> {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    })

    if (existingUser) {
      throw new Error("User is already active")
    }

    // Create user
    const user = await prisma.user.create({
      data: payload,
    })

    return {
      success: true,
      message: "User created successfully",
      data: user,
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error("Something went wrong")
  }
}
