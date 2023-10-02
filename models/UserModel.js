import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  Nombre: String,
  identificacion: String,
  nacimiento: String,
  Nacionalidad: String,
  telefono: String,
  email: String,
  contrasena:String,
  Ocupacion: String,
  OrigenDeFondos: String,
  FuenteDeIngresos: String,
  ConocimientoBlockchain: String,
  ProcedenciaDeFondos: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;