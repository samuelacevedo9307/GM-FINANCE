import connectToDatabase from "../../../lib/mongo";
import UserModel from "../../../models/UserModel";
import { transporter } from "../src/config/mailer";

export const getusers = async () => {
  const client = await connectToDatabase();
  const data = await UserModel.find();

  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};

export const adduser = async (user) => {
  const client = await connectToDatabase();
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
    const { nombre, email, mensaje } = req.body;
    console.log(req.body);
    try {
      const insertedID = await adduser(req.body);
      let info = await transporter.sendMail({
        from: '"Prueba 👻" <luisfelipegomezr2@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Prueba", // Subject line
        text: mensaje , // plain text body
      });
      let info2 = await transporter.sendMail({
        from: '"Prueba 👻" <luisfelipegomezr2@gmail.com>', // sender address
        to: "luisfelipegomezr2@gmail.com", // list of receivers
        subject: "Prueba", // Subject line
        text: `Informacion de ${nombre} Recibida` , // plain text body
      });
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
