import connectToDatabase from "../../../lib/mongo";
import Projects from "../../../models/ProjectsModel";

export const getProject = async () => {
  const client = await connectToDatabase();
  const data = await Projects.find();

  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};
export const addProject = async (data) => {
  const client = await connectToDatabase();
  const response = await Projects.collection.insertOne(data);

  client.connection.close();

  return response.insertedId;
};
export const editProject = async (id, update) => {
  try {
    const client = await connectToDatabase();
    const result = await Projects.updateOne({_id: id}, { $set: update});
    client.connection.close();
    // update session data if wallet was successfully added

    return { message: result };
  } catch (error) {
    console.error(error);
    return { message: `Error updating information: ${error.message}` };
  }
};

export default async function handler(req, res) {
  
  if (req.method === "GET") {
    const data = await getProject();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    console.log(req.body);
    const insertedID = await addProject (req.body);
    res.status(200).json(insertedID);
  } else if (req.method === "PUT") {
    const {id} = req.query;
    console.log(req.body);
    const insertedID = await editProject(id, req.body);
    res.status(200).json(insertedID);
  }
}
