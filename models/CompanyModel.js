import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  NombreDeLaEmpresa: String,
  NumeroRegistroEmpresa: String,
  ConstitucionEmpresa: String,
  DireccionLegalEmpresa: String,
  PaisDeConstitucion: String,
  TipoDeEntidad: String,
  Contrasena:String,
  NúmeroDeIdentificacion: String,
  Contacto: String,
  RepresentanteLegal: String,
  CargoRepresentanteLegal: String,
  DocumentoRepresentanteLegal: String,
  ContactoRepresentanteLegal: String,
  DocumentosEmpresa: String,
  EstadoFinanciero: String,
  Accionistas: String,
  CertificadosDeAcciones: String,
  ProblemasLegalesPendientes: String,
  AutorizacionLegal: Boolean,
  Verificado: Boolean,

});

const company = mongoose.models.empresas || mongoose.model('empresas', CompanySchema);

export default company;