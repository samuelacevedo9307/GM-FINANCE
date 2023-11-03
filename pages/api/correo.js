import connectToDatabase from "../../lib/mongo";
import UserModel from "../../models/UserModel";
import { transporter } from "./src/config/mailer";

export const getuser = async (correo) => {
  const client = await connectToDatabase();
  const data = await UserModel.findOne({email: correo });
  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};

export const editPass = async (id, password) => {
  try {
    const client = await connectToDatabase();
    const result = await UserModel.updateOne({_id: id}, { $set: password });
    client.connection.close();
    // update session data if wallet was successfully added

    return { message: result };
  } catch (error) {
    console.error(error);
    return { message: `Error updating user wallet information: ${error.message}` };
  }
};

export default async (req, res) => {
  const { correoElectronico } = req.body;
  const { id } = req.query;
  const te = JSON.stringify(correoElectronico);
  console.log(te);
  if (req.method === "POST") {
    const data = await getuser(correoElectronico);

    if (!data) {
      return res.status(404).json("user not found");
    }
    const server = process.env.NEXT_PUBLIC_SERVER;
    let info = await transporter.sendMail({
      from: '"forgot password 👻" <luisfelipegomezr2@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "forgot password", // Subject line
      text: `Ingresa a este link para cambiar de contraseña:  /CambiarContrasena?id=${data._id}` , // plain text body
    });
    return res.status(200).json({ user: data });
  }else if (req.method === "PUT") {
    console.log(id);
    console.log(req.body);    
    const insertedID = await editPass(id, req.body);
    if (!insertedID) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(insertedID);
  }
};
