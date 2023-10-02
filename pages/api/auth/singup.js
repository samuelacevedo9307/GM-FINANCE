import connectToDatabase from "../../../lib/mongo";
import UserModel from "../../../models/UserModel";

export const getusers = async () => {
  const client = await connectToDatabase();
  const data = await UserModel.find();

  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};

export const adduser = async (user) => {
  const client = await connectToDatabase();

  // Verificar si el usuario ya está registrado
  const existingUser = await UserModel.findOne({ email: user.email });

  if (existingUser) {
    throw new Error("El usuario ya está registrado");
  }

  const response = await UserModel.collection.insertOne(user);

  client.connection.close();

  return response.insertedId;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await getusers();
      res.status(200).json({ users: data });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(400).json({ error: error.message});
      } else {
        res.status(500).json({ error: "Error interno del servidor" });
      }
    }
  } else if (req.method === "POST") {
    console.log(req.body);
    try {
      const insertedID = await adduser(req.body);
      res.status(200).json(insertedID);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(400).json({ error: error.message});
      } else {
        res.status(500).json({ error: "Error interno del servidor" });
      }
    }
  }
}
