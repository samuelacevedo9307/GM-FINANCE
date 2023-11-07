import connectToDatabase from "../../../lib/mongo";
import CompanyModel from "../../../models/CompanyModel";
import { transporter } from "../src/config/mailer";

export const getusers = async () => {
  const client = await connectToDatabase();
  const data = await CompanyModel.find();

  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};

export const adduser = async (user) => {
  const client = await connectToDatabase();

  // Verificar si el usuario ya está registrado
  const existingUser = await CompanyModel.findOne({ ContactoRepresentanteLegal: user.ContactoRepresentanteLegal });

  if (existingUser) {
    throw new Error("El usuario ya está registrado");
  }

  const response = await CompanyModel.collection.insertOne(user);

  client.connection.close();

  return response.insertedId;
};
export const verify = async (ContactoRepresentanteLegal, ver) => {
  try {
    const client = await connectToDatabase();
    const result = await CompanyModel.updateOne({ContactoRepresentanteLegal: ContactoRepresentanteLegal}, { $set: ver });
    client.connection.close();
    // update session data if wallet was successfully added

    return { message: result };
  } catch (error) {
    console.error(error);
    return { message: `Error updating user information: ${error.message}` };
  }
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
    const {Contacto} = req.body;
    console.log(req.body);
    try {
      const insertedID = await adduser(req.body);
      const server = process.env.NEXT_PUBLIC_SERVER;
     /* let info = await transporter.sendMail({
         from: '"Verifica Tu correo 👻" <luisfelipegomezr2@gmail.com>', // sender address
         to: Contacto, // list of receivers
         subject: "Verifica Tu correo", // Subject line
         text: `Ingresa a este link para Verificar tu cuenta:  https://gmf-inal.vercel.app/VerificarCorreo?correo=${Contactol}` , // plain text body
       }); */
      // let info2 = await transporter.sendMail({
      //   from: '"Prueba 👻" <luisfelipegomezr2@gmail.com>', // sender address
      //   to: "luisfelipegomezr2@gmail.com", // list of receivers
      //   subject: "Prueba", // Subject line
      //   text: `Informacion de ${nombre} Recibida` , // plain text body
      // });
      res.status(200).json(insertedID);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(400).json({ error: error.message});
      } else {
        res.status(500).json({ error: "Error interno del servidor" });
      }
    }
  }else if (req.method === "PUT") {
    const { ContactoRepresentanteLegal } = req.query;   
    const insertedID = await verify(ContactoRepresentanteLegal, req.body);
    if (!insertedID) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(insertedID);
  }
}
