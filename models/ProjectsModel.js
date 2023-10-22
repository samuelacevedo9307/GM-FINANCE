import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  nit:String,
  image: String,
  users: String,
  raking: String,
  token: String,

});

const Project = mongoose.models.projects || mongoose.model('projects', ProjectSchema);

export default Project;