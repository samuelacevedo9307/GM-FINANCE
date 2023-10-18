import connectToDatabase from "../../lib/mongo";
import mongoose from "mongoose";
import UserModel from "../../models/UserModel";
import { getSession, updateSession } from "next-auth/react";

export const getuser = async (id) => {
  const client = await connectToDatabase();
  if (mongoose.Types.ObjectId.isValid(id)) {
    const data = await UserModel.findOne({ _id: id });
    client.connection.close();

    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
};

export const editPass = async (id, update) => {
  try {
    const client = await connectToDatabase();
    const result = await UserModel.updateOne({_id: id}, { $set: update });
    client.connection.close();
    // update session data if wallet was successfully added

    return { message: result };
  } catch (error) {
    console.error(error);
    return { message: `Error updating user wallet information: ${error.message}` };
  }
};

export const deleteuser = async (id) => {
  const client = await connectToDatabase();
  if (mongoose.Types.ObjectId.isValid(id)) {
    const result = await UserModel.deleteOne({ _id: id });
    client.connection.close();

    if (result.modifiedCount > 0) {
      return { message: "User Deleted successfully" };
    } else {
      return { message: "User not found" };
    }
  } else {
    return { message: "Invalid ID" };
  }
};

export default async (req, res) => {
  const { id } = req.query;
  if (req.method === "GET") {
    const data = await getuser(id);
    if (!data) {
      return res.status(404).json("user not found");
    }
    return res.status(200).json({ user: data });
  } else if (req.method === "PUT") {
    const result = await editPass(id, req.body);
    return res.status(200).json(result);
  }
  else if (req.method === "DELETE") {
    const result = await deleteuser(id);
    return res.status(200).json(result);
  }
};
