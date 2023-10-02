import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useSession } from "next-auth/react";
import Headlanding from "@/Components/header.js";
import Nftmodal from "@/Components/NFTmodal.js";
import _app from "@/pages/_app.js";
import ServiceItem from "@/Components/ServiceItem.js";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  

  return (
    <div>
      <Headlanding></Headlanding>

      {/*------seccion ---------*/}
      <main>
                <section className="section">
                  <div className="description">
                      <h1>Empresas Tokenizadas</h1>
                      <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga ganancias al ayudar a expandir empresas sólidas y confiables!</p>
                      <button>Ofertar</button>
                  </div>
                    {/*-grafica lado derecho section*/}
                  <div className="imagenToken">
                      <div className="gmToken1"></div>
                      <div className="gmToken2"></div>
                      <div className="gmToken3"></div>
                      <div className="gmToken4"></div>
                      <div className="gmToken5"></div>
                      <div className="gmToken6"></div>
                    </div>
                  </section>
             
      </main>
      {/*-comienzo del articulo-*/}
      <section className="section1">
          <h1>Ranking</h1>
          <h2>Los Tokens Corporativos son una forma digital de acceder a los productos y servicios de las empresas.</h2>
      </section>
      {/*-section segundo texto izquierda h3 -*/}
      {/*-section lado derecho con botones-*/}
      <section className="section2">
      <ServiceItem
        title="GM NFT"
        description="¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!"
      />
      <ServiceItem
        title="DAF"
        description="Un token corporativo está vinculado a un DAF (Fondo Autónomo Descentralizado)."
      />
      <ServiceItem
        title="OFERTAS"
        description="Las empresas emiten ofertas digitales para invitar a personas de todo el mundo a ayudar a expandir sus negocios."
      />
      <ServiceItem
        title="GM DEX"
        description="Las Fichas Corporativas están construidas en la red principal de Binance Smart Chain."
      />
    </section>
      {/*-grafica lado izquierdo section*/}
      <section className="section3">
        <div className="tokenizar">
          <div className="tokenizar1"></div>
          <div className="tokenizar2">
            <h1>Tokenizar</h1>
            <h2>Las empresas que cuentan con una estructura legal pueden emitir tokens de activos productivos, que pueden ser adquiridos por los usuarios para ayudar a financiar sus procesos y realizar inversiones seguras.</h2>
            <button>Ver video</button>
          </div>
        </div>
      </section>
      {/*-fin articulo y comienza nueva seccion*/}
      
      {/*------------ video tokenizacion seccion 3-_-------------*/}
     
      {/*------------texto ranking-_-------------*/}
      <section className="section1">
        <h1>Tokenizacion</h1>
        <h2>Los tokens productivos están vinculados a la facturación de empresas de diferentes sectores que ofrecen productos o servicios probados y validados en el mercado.</h2>
      </section>
      {/*------------seccion TOKENIZACION-_-------------*/}
      <section className="section4">
        <div className="s41">
          <button></button>
          <h4>GM NFT</h4>
          <p>¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!</p>
        </div>
        <div className="s42">
          <button></button>
          <h4>DAF</h4>
          <p>Un token corporativo está vinculado a un DAF (Fondo Autónomo Descentralizado).</p>
        </div>
        <div className="s43">
          <button></button>
          <h4>OFERTAS</h4>
          <p>Las empresas emiten ofertas digitales para invitara personas de todo el mundo a ayudar a expandir sus negocios.</p>
        </div>
        <div className="s44">
          <button></button>
          <h4>GM DEX</h4>
          <p>Las Fichas Corporativas están construidas en la red principal de Binance Smart Chain Podrás Almacenar de forma seguran Metamask, Binance Wallet o Trust Wallet</p>
        </div>
      </section>
      {/*-seccion inferior con article-*/}
      <section className="inferior">
        <h1> PREGUNTAS FRECUENTES 
        </h1>
        <div className="pregunta">
          
            <div>
                <div className="pregunta1">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">
                    ¿Cómo funciona?
                  </button>
                  
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample4">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
                <div className="pregunta2">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample5" aria-expanded="false" aria-controls="multiCollapseExample5">
                    ¿Cómo funciona?
                  </button>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample5">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
                <div className="pregunta3">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample6">
                    ¿Cómo funciona?
                  </button>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample6">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
          </div>

          <div>
                <div className="pregunta4">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample7" aria-expanded="false" aria-controls="multiCollapseExample7">
                    ¿Cómo funciona?
                  </button>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample7">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
                <div className="pregunta5">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample8" aria-expanded="false" aria-controls="multiCollapseExample8">
                    ¿Cómo funciona?
                  </button>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample8">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
                <div className="pregunta6">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample9" aria-expanded="false" aria-controls="multiCollapseExample9">
                    ¿Cómo funciona?
                  </button>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample9">
                  <p>
                    es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                    económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                  </p>
                </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                POLITICA DE TRATAMIENTO DE DATOS
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Con la aceptación de esta autorización, manifiesto que he sido informado por bvc y sus empresas filiales y asociadas (en adelante las “Compañías”) que: 1. Las Compañías actuarán como Responsables del Tratamiento de datos personales de los cuales soy titular y que, conjunta o separadamente podrán recolectar, usar, transferir, transmitir y tratar datos personales conforme la Política de Tratamiento de Datos Personales de las Compañías disponible en www.bvc.com.co. 2. Es de carácter
              facultativo responder preguntas que versen sobre Datos Sensibles o sobre menores de edad. 3. El titular del dato sensible no está obligado autorizar su tratamiento por parte de las Compañías. 4. Mis derechos como titular de los datos son los previstos en la Constitución y la ley, especialmente el derecho a conocer, actualizar, rectificar y suprimir mi información personal, así como el derecho a revocar el consentimiento otorgado para el tratamiento de datos personales y datos
              sensibles. 5. Los derechos pueden ser ejercidos a través de los canales gratuitos dispuestos por las Compañías y observando la Política de Tratamiento de Datos Personales de las Compañías. 6. Para cualquier inquietud o información adicional relacionada con el tratamiento de datos personales, puedo contactarme al correo electrónico datospersonales@bvc.com.co o al teléfono 6068666. 7. Las Compañías garantizan la confidencialidad, libertad, seguridad, veracidad, transparencia, acceso
              y circulación restringida de los datos personales y se reservan el derecho de modificar su Política de Tratamiento de Datos Personales en cualquier momento. Cualquier cambio será informado y publicado oportunamente en la página web o a través de los medios que disponga para tal fin. Así mismo, de conformidad con lo dispuesto en la ley 1266 de 2008, manifiesto que en mi calidad de Aportante autorizó a las Compañías o a cualquier otro operador y/o fuente de información legalmente
              establecido a consultar, en cualquier tiempo, en DataCrédito o en cualquier otra base de datos manejada por un operador y/o fuente de información financiera y crediticia, toda la información relevante para conocer el desempeño financiero del Titular de la Información, la viabilidad para entablar o mantener una relación contractual y/o comercial, o para cualquier otra finalidad, incluyendo sin limitarse la realización de campañas de mercadeo, ofrecimiento de productos y publicidad
              en general, todo lo anterior frente al nacimiento, ejecución, modificación, liquidación y/o extinción de las obligaciones que se deriven por la utilización de la plataforma InvertMint, deberes legales de contenido patrimonial, datos de ubicación y contacto (número de teléfono fijo, número de teléfono celular, dirección del domicilio, dirección laboral y correo electrónico) y lo atinente a las relaciones comerciales, financieras y en general socioeconómicas que haya entregado o que
              consten en registros públicos, bases de datos públicas o documentos públicos. La autorización anterior no impedirá al Titular de la Información a ejercer el derecho a corroborar en cualquier tiempo en bvc, en DataCrédito o en la central de información de riesgo a la cual se hayan suministrado los datos, que la información suministrada es veraz, completa, exacta y actualizada, y en caso de que no lo sea, a que se deje constancia de su desacuerdo, a exigir la rectificación y a ser
              informado sobre las correcciones efectuadas. Teniendo en cuenta lo anterior, yo autorizo de manera voluntaria, previa, explícita, informada e inequívoca a las Compañías para tratar los datos personales, los “datos sensibles” e información financiera de acuerdo con la Política de Tratamiento de Datos Personales de las Compañías y para los fines relacionados con su objeto social y en especial para fines legales, contractuales, comerciales, de almacenamiento, uso, autenticación de
              identidad, mecanismo de prueba de vida, encuestas digitales, investigaciones de mercado, envío de comunicaciones, envío de cursos educativos ofrecidos por las Compañías, realizar comunicaciones oficiales, entrega de información relevante, realizar notificaciones de la cuenta, entrega de piezas y contenidos publicitarios, dar soporte a PQRS, solucionar inconsistencias o inconvenientes presentados con los servicios de las Compañías. Así mismo, declaro que estoy y estaré autorizando
              para entregar los datos personales a terceros que suministre a las Compañías en relación con las finalidades de Tratamiento antes indicadas. La información obtenida para el Tratamiento de mis datos personales la he suministrado de forma voluntaria y es verídica.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">
                Términos y condiciones
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              1. Actividad de Financiación Colaborativa - Crowdfunding La Bolsa de Valores de Colombia S.A. (en adelante “bvc”) administra una plataforma que realiza la actividad de financiación colaborativa prevista en el el artículo 2.41.1.1.1 y siguientes del Decreto 2555 de 2010. Tal Plataforma de Financiación Colaborativa se denomina InvertMint (en adelante InvertMint o la Plataforma). La administración de la actividad de financiación colaborativa realizada por bvc se desarrolla básicamente
              a través de una infraestructura tecnológica, que puede incluir interfaces, plataformas, páginas de internet u otro medio de comunicación electrónica o digital, a través del cual se pone en contacto un número plural de aportantes con receptores que solicitan financiación en nombre propio para destinarlo a un proyecto productivo. La financiación colaborativa se materializa a través de la adquisición de valores de financiación colaborativa y es realizada directamente por los
              Aportantes en favor de los Receptores. Los valores de financiación colaborativa emitidos y adquiridos a través de InvertMint se consideran valores en los términos del artículo 2 de la Ley 964 de 2005, en concordancia con lo dispuesto en el artículo 2.41.5.1.1 del Decreto 2555 de 2010 y demás normas que lo modifiquen, adicionen o deroguen. 2. Alcance de la Responsabilidad de bvc y/o InvertMint Con la aceptación de los presentes Términos y Condiciones el Aportante y el Receptor
              aceptan y entienden que: 2.1. La aceptación y/o publicación de una emisión o de un Proyecto Productivo en la Plataforma no implicará calificación ni responsabilidad alguna por parte de bvc acerca de las personas jurídicas, ni de las emisiones, ni de los Proyectos Productivos, ni sobre el precio, la bondad o negociabilidad del valor, o de la respectiva emisión, ni sobre la solvencia del Receptor, ni de solidez o respaldo de los valores que se emitan en la Plataforma; 2.2. Las
              obligaciones de bvc y InvertMint son de medio y no de resultado, por ello ninguna operación, actividad o publicación de bvc y/o de InvertMint puede ser considerada como una obligación o compromiso de resultado respecto de las inversiones realizadas; 2.3. Las actividades de clasificación y ninguna otra puede entenderse en ningún caso como una calificación de los riesgos asociados a los mismos, ni podrá considerarse como la emisión de una opinión o la promesa o el aseguramiento de
              obtención de rentabilidades para los Aportantes. bvc provee la información que los Aportantes pueden utilizar para la toma de decisiones de inversión; 2.4. bvc no otorga garantías, avales, ni ningún tipo de seguridades respecto de los valores que sean emitidos a través de la Plataforma; 2.5. bvc es administrador de InvertMint y no responde por la suspensión o interrupción de los servicios de InvertMint, ni por deficiencias mecánicas, electrónicas, de software que se observen en la
              prestación de los mismos, ni por cualquier otro hecho que escape razonablemente al control de bvc. No obstante, bvc desplegará sus mejores esfuerzos para mantener o restablecer el funcionamiento de la Plataforma; 2.6. En relación con su actividad como administrador de InvertMint, el cumplimiento de normas aplicables y el funcionamiento de la Plataforma, bvc sólo será responsable de los daños causados por su culpa grave o dolo. 2.7. La creación de la cuenta en InvertMint por un
              potencial Receptor de inversión no implica la aceptación y/o publicación de una emisión o de un Proyecto Productivo en la Plataforma; 3. Conocimiento y Aceptación del Reglamento, Circular e Instructivos Operativos de InvertMint InvertMint cuenta con un Reglamento de la Plataforma de Financiación Colaborativa – InvertMint (en adelante Reglamento), una Circular de la Plataforma de Financiación Colaborativa - InvertMint (en adelante Circular) y unos Instructivos Operativos, que se
              encuentran publicados en www.InvertMint.com. Tales documentos desarrollan lo previsto en el Libro 41 de la Parte 2 del Decreto 2555 de 2010 e incluyen las condiciones de uso, derechos, obligaciones y responsabilidades de los Aportantes, Receptores y bvc. Con la aceptación de los presentes Términos y Condiciones se entiende que los Aportantes y los Receptores conocen y aceptan el Reglamento, la Circular y los Instructivos Operativos de InvertMint. En consecuencia, en ningún momento
              servirá como excusa o defensa la ignorancia o desconocimiento de dicho Reglamento, Circular e Instructivos Operativos y por lo tanto los mismos obligan en los términos en ellos previstos. 4. Riesgos y Responsabilidades Adicionalmente, con la aceptación de los presentes Términos y Condiciones los Aportantes y los Receptores aceptan y entienden que: 4.1. La emisión de valores de financiación colaborativa contiene obligaciones de resultados, tales como realizar los pagos a los
              Aportante de conformidad con las condiciones de la emisión 4.2. Las garantías que respaldan las emisiones en ningún evento respaldan la totalidad de los montos invertidos, por lo anterior, exoneran a bvc de cualquier reclamación o perjuicio por el incumplimiento de las obligaciones del Receptor y por la no recuperación de recursos en ejecución de las garantías; 4.3. Según lo previsto en las normas vigentes, bvc realizará una clasificación de los Proyectos Productivos. La
              clasificación de los Proyectos Productivos, en ningún caso implica la calificación de los riesgos asociados a los mismos, ni podrá considerarse como la emisión de una opinión o la promesa o el aseguramiento de obtención de rentabilidades para los Aportantes. bvc provee información suministrada por los Receptores que los Aportantes pueden utilizar para la toma de decisiones de inversión; 4.4. bvc en ningún momento realiza calificaciones de ningún tipo de riesgos y tampoco hace
              recomendaciones de inversión. bvc provee la información que los Aportantes pueden utilizar para la toma de decisiones de inversión; 4.5. El Receptor es el único responsable por la integridad, veracidad, completitud y actualización de toda la información que deba suministrar a la Plataforma y en particular de aquella relacionada con el Proyecto Productivo, revelada a los Aportantes y al público en general; 4.6. bvc no será responsable por retraso, incumplimiento o demoras en los
              pagos por parte de los Receptores; 4.7. Con la presentación de cada Demanda de Inversión, los Aportantes aceptan que podrán ser adjudicados en un valor inferior al incluido en la Demanda de Inversión, según lo previsto en las reglas de Adjudicación y el prorrateo, incorporadas en el Reglamento y en la Circular. 4.8. La Plataforma es el mecanismo por medio del cual los Receptores realizan las emisiones. En consecuencia, la realización de estas emisiones en ningún caso implicará la
              calificación del Receptor por parte de la bvc, ni responsabilidad alguna de bvc acerca del Receptor, ni sobre la bondad de la respectiva emisión; 4.9. Los Aportantes asumen todos los riesgos inherentes a la realización de una inversión a través de una emisión en la Plataforma, y que la emisión y administración de los recursos producto de la misma son de competencia y responsabilidad exclusiva de los Receptores. 4.10. Los Receptores conocen que, bajo la regulación colombiana para el
              Tratamiento de Datos Personales, podrán tener la calidad de Encargados del Tratamiento de Datos Personales de los Aportantes si como consecuencia del cumplimiento de sus obligaciones tributarias, tienen acceso a los Datos Personales de estos. En dado caso, el Receptor acepta que podrá tener acceso a estos Datos Personales únicamente para fines de cumplimiento normativo en materia tributaria. En este caso, el Receptor deberá tratar los Datos Personales de los Receptores de
              conformidad con la Política para el Tratamiento de Datos Personales de la Bolsa de Valores de Colombia. 5. Manejo de usuarios, claves e información Además de lo ya indicado en el presente documento, con la aceptación de los presentes Términos y Condiciones los Aportantes y los Receptores aceptan y entienden que: 5.1. El acceso y uso de las funciones protegidas por contraseña de InvertMint está restringido únicamente a los Aportantes, a los Receptores y a los potenciales Receptores
              que creen una cuenta y se vinculen a la Plataforma. Para tal fin se debe cumplir a cabalidad con el proceso de creación de cuenta y vinculación en la Plataforma que puede conllevar el registro con una contraseña, de conformidad con la calidad con la que se crea la cuenta. 5.2. Proporcionan datos ciertos, completos, actualizados y exactos, según se les solicite en el proceso de creación de cuenta, vinculación a la Plataforma y demás solicitudes de información por parte de
              InvertMint; 5.3. Son responsables de mantener al día y actualizar cualquier dato de registro y otra información que proporcionen a InvertMint; 5.4. Son responsables de mantener la seguridad de su usuario y contraseña, así como de cualquier actividad que ocurra bajo su cuenta; 5.5. Notificarán inmediatamente a bvc por los mecanismos institucionales establecidos de cualquier acceso o uso no autorizado de su cuenta o de sus credenciales de acceso; 5.6. Entienden que cualquier persona
              con su contraseña podrá acceder a su cuenta y a cualquier dato de registro, incluyendo, sin limitación, el acceso a sus módulos y funciones accesibles a través de su cuenta; 5.7. bvc no será responsable ante los Aportantes, Receptores o potenciales Receptores por cualquier pérdida económica en la que puedan incurrir como resultado de que una persona diferente a usted utilice su usuario y/o su contraseña, con o sin su conocimiento; 5.8. Únicamente podrán hacer uso del usuario y
              clave que le fueron asignados para ingresar a la plataforma InvertMint. 5.9. El potencial Receptor mantendrá la cuenta en InvertMint, hasta tanto solicite su cancelación. 6. Autorizaciones y facultades otorgadas por los Aportantes a bvc Con la aceptación de los presentes Términos y Condiciones los Aportantes y los Receptores facultan de manera irrevocable a bvc para lo siguiente: 6.1. Para que sean el Depositante Directo de los Valores de Financiación Colaborativa que conforman su
              portafolio en el Depósito Centralizado de Valores de Colombia Deceval S.A., facultando a bvc para que de la instrucción a Deceval consistente en realizar la anotación en cuenta de los valores de financiación colaborativa, en caso de cumplir con requisitos establecidos en el Reglamento y Circular de InvertMint; 6.2. Solicite a Deceval la habilitación o la actualización de datos de una subcuenta de depósito, cuando corresponda, a nombre del Aportante, con el objeto de que se
              registren y contabilicen allí sus Valores de Financiación Colaborativa; 6.3. Endose en administración los Valores de Financiación Colaborativa de propiedad del Aportante y todos los que le sean transferidos en el futuro a través del depósito, en caso de que no lo haga directamente el Aportante; 6.4. Realice las operaciones que se puedan derivar como consecuencia del endoso en administración; y 6.5. Transfiera como consecuencia de las operaciones celebradas Valores de Financiación
              Colaborativa a o del portafolio del Aportante. 6.6. Para realizar directamente o a través de terceros todos los trámites necesarios para el cobro del capital e intereses frente al Receptor o para realizar la negociación y venta de la cartera y adelantar gestiones judiciales o extra judiciales para el cobro de la cartera, incluso para enajenar por cuenta de los Aportantes dicha cartera a terceros, para lo cual también está facultada bvc para determinar el precio de dicha
              enajenación. 6.7. Para adelantar todos los trámites necesarios para gestionar el cobro de las garantías, incluyendo las transferencias de dominio, en aquellos casos que se realice el pago de las mismas. 7. Declaración de origen de los fondos y actividades legales Con la aceptación de los presentes Términos y Condiciones el Receptor realiza las siguientes declaraciones: 7.1. Que los recursos que transfieren a InvertMint provienen de actividades lícitas, de conformidad con la
              normativa colombiana. 7.2. Que no admitiran que terceros efectúen depósitos o transferencias a nombre suyo, con fondos provenientes de las actividades ilícitas contempladas en el Código Penal Colombiano o en cualquier norma que lo modifique o adicione; ni efectuarán transacciones destinadas a tales actividades o a favor de personas relacionadas con las mismas. 7.3. Que autorizan a resolver cualquier acuerdo, negocio o contrato celebrado en InvertMint, en caso de infracción de
              cualquiera de los numerales de la Declaración de origen de fondos y actividades legales eximiendo a bvc de toda responsabilidad que se derive por información errónea, falsa o inexacta que hubieren proporcionado a la Plataforma, o por la violación de las declaraciones acá realizadas. 8. Mecanismos de Resolución de Controversias Con la aceptación de los presentes términos y condiciones el Receptor aceptan los mecanismos de resolución de controversias establecidos en el Reglamento.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nftmodal/>
    </div>
  );
}
