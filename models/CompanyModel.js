import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  NombreDeLaEmpresa: String,
  Contrasena: String,
  NumeroDeIdentificacion: String,
  Contacto: String,
  RepresentanteLegal: String,
  CargoRepresentanteLegal: String,
  DocumentoRepresentanteLegal: String,
  ContactoRepresentanteLegal: String,
  DocumentosEmpresa: String,
  ProblemasLegalesPendientes: String,
  AutorizacionLegal: Boolean,
  Verificado: Boolean,
});

const company = mongoose.models.empresas || mongoose.model('empresas', CompanySchema);

export default company;
