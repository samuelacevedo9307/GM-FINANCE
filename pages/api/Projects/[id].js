
import connectToDatabase from "../../../lib/mongo";
import Projects from "../../../models/ProjectsModel";

export const getProject = async (id) => {
  const client = await connectToDatabase();
  const data = await Projects.findOne({ _id: id });

  client.connection.close();

  return JSON.parse(JSON.stringify(data));
};
export const editProject = async (id, update) => {
  try {
    const client = await connectToDatabase();
    const result = await Projects.updateOne({ _id: id }, { $set: update});
    client.connection.close();
    // update session data if wallet was successfully added

    return { message: result };
  } catch (error) {
    console.error(error);
    return { message: `Error updating information: ${error.message}` };
  }
};

export default async function handler(req, res) {
  const {id} = req.query;
  if (req.method === "GET") {
    const data = await getProject(id);
    res.status(200).json(data);
  } else if (req.method === "PUT") {
    console.log(req.body);
    const insertedID = await editProject(id, req.body);
    res.status(200).json(insertedID);
  }
}
