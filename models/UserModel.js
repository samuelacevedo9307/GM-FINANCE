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
  Verificado: Boolean,
  Admin: Boolean,

});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;