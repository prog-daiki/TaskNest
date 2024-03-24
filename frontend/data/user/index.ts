import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const getUserById = async (
  id: string,
): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    console.error(
      `Failed to retrieve user with id ${id}:`,
      error,
    );
    return null;
  }
};
