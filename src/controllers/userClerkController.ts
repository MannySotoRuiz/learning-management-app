import { Request, Response } from "express";
import { clerkClient } from "../index";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetaData.userType,
        settings: userData.publicMetaData.settings,
      },
    });
    res.json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating user", error });
  }
};
