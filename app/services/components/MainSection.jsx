import React from "react";
import Image from "next/image";
import TitleDetail from "./TitleDetail";

const MainSection = () => {
  return (
    <section className="min-h-screen mt-8 2xl:mt-12 flex flex-col items-center px-4 md:px-60">
      <div className="2xl:max-w-[700px] md:max-w-[550px]">
        <Image alt="Nuestros pasos a seguir en el proceso son: 1- Detectamos, 2- Prevenimos, 3- Solucionamos" src={"/images/Services-Steps.svg"} height={120} width={700} />
      </div>
      <article className="flex flex-col gap-12 my-4 md:my-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
            Análisis de Riesgos
            <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
          </h2>

          <p className="text-md md:text-xl md:text-justify">
            El análisis de riesgos <span className="font-bold">identifica</span>{" "}
            y <span className="font-bold">evalúa</span> las amenazas y
            vulnerabilidades que pueden afectar a tus instalaciones, permitiendo
            desarrollar{" "}
            <span className="font-bold">
              planes de seguridad personalizados
            </span>{" "}
            y eficaces.
          </p>
          <TitleDetail text={"Evaluación de vulnerabilidades"} />
          <p className="text-md md:text-xl md:text-justify">
            La evaluación de vulnerabilidades identifica las{" "}
            <span className="font-bold">debilidades</span> en la seguridad
            física y electrónica de sus instalaciones, que podrían ser
            aprovechadas por intrusos o delincuentes.{" "}
            <span className="font-bold text-dk_primary">¿Qué hacemos?</span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Análisis de accesos:</span>{" "}
                Evaluación de los puntos de entrada y salida, y del control de
                acceso de personas y vehículos.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Revisión de sistemas electrónicos:
                </span>{" "}
                Evaluación de la ubicación de las instalaciones, el entorno
                circundante y la incidencia delictiva en la zona.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Análisis de riesgos externos:</span>{" "}
                Revisión exhaustiva de puertas, ventanas, cercas, iluminación,
                sistemas de alarma y cámaras de seguridad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Entrevistas con el personal:</span>{" "}
                Recopilación de información sobre incidentes de seguridad
                previos y posibles riesgos internos.
              </p>
            </div>
          </div>

          <TitleDetail text={"Desarrollo de planes de seguridad"} />
          <p className="text-md md:text-xl md:text-justify">
            El desarrollo de planes de seguridad implica{" "}
            <span className="font-bold">diseñar estrategias y protocolos </span>
            personalizados para mitigar los riesgos identificados en la
            evaluación de vulnerabilidades.{" "}
            <span className="font-bold text-dk_primary">¿Cómo lo hacemos?</span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Inspección de instalaciones:</span>{" "}
                Revisión exhaustiva de puertas, ventanas, cercas, iluminación,
                sistemas de alarma y cámaras de seguridad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Revisión de sistemas electrónicos:
                </span>{" "}
                Evaluación de la ubicación de las instalaciones, el entorno
                circundante y la incidencia delictiva en la zona.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Elaboración de planes de emergencia:
                </span>{" "}
                Definición de protocolos de actuación ante robos, incendios,
                desastres naturales y otras situaciones de riesgo.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Diseño de sistemas de seguridad:
                </span>{" "}
                Selección e instalación de los sistemas y dispositivos adecuados
                a las necesidades del cliente.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Definición de protocolos de vigilancia:
                </span>{" "}
                Establecimiento de rondas de seguridad, control de accesos y
                otras medidas de seguridad física.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Capacitación de personal:</span>{" "}
                Entrenamiento de guardias de seguridad y empleados en la
                implementación de los planes de seguridad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Elaboración de informes:</span>{" "}
                Documentación detallada de los planes de seguridad, incluyendo
                protocolos, procedimientos y recomendaciones.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
            Seguridad Física
            <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
          </h2>
        <p className="text-md md:text-xl md:text-justify">
          La seguridad física es la <span className="font-bold">base</span> de
          cualquier estrategia de protección. Se centra en la prevención de
          riesgos y amenazas a través de la{" "}
          <span className="font-bold">presencia</span> y{" "}
          <span className="font-bold">acción directa</span> de Personal de
          Seguridad.
        </p>

        <div className="flex flex-col gap-8">
          <TitleDetail text={"Vigilancia y rondas de seguridad"} />
          <p className="text-md md:text-xl md:text-justify">
            La vigilancia y las rondas de seguridad son la presencia activa de
            guardias de seguridad en tus instalaciones. Implica recorridos
            periódicos para disuadir intrusiones, detectar anomalías y
            garantizar el cumplimiento de normas de seguridad.
            <span className="font-bold text-dk_primary">
              ¿Cómo lo logramos?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Recorridos perimetrales e internos:
                </span>{" "}
                Inspección de puertas, ventanas, accesos y áreas vulnerables.
                personas y vehículos.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Monitoreo de cámaras de seguridad:
                </span>{" "}
                Supervisión constante de imágenes para detectar actividades
                sospechosas.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Control de iluminación:</span>{" "}
                Verificar que las luces funcionen correctamente para evitar
                zonas oscuras.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Detección de riesgos:</span>{" "}
                Identificar posibles peligros como fugas de gas, incendios o
                fallas eléctricas.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Registro de novedades:</span>{" "}
                Documentar cualquier incidente o anomalía detectada durante las
                rondas.
              </p>
            </div>
          </div>
          <TitleDetail text={"Control de accesos"} />
          <p className="text-md md:text-xl md:text-justify">
            El control de accesos regula la entrada y salida de personas y
            vehículos a tus instalaciones. La integración de la seguridad
            electrónica con la seguridad física proporciona una protección más
            completa y eficaz.{" "}
            <span className="font-bold text-dk_primary">¿Qué hacemos?</span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Identificación de personas:</span>{" "}
                Verificar la identidad de visitantes y empleados mediante
                documentos o credenciales.
              </p>
            </div>
            <div className="flex items-top gap-4"></div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Registro de ingresos y egresos:
                </span>{" "}
                Llevar un registro detallado de quién entra y sale, a qué hora y
                con qué propósito.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Control de vehículo:</span>{" "}
                Inspeccionar vehículos que ingresan y salen, y verificar la
                autorización de sus conductores.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Implementación de tecnología:</span>{" "}
                Sistemas de Control de Acceso con tarjetas magnéticas, lectores
                de huellas dactilares o reconocimiento facial.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Gestión de llaves y credenciales:
                </span>{" "}
                Administrar la entrega y devolución de llaves y credenciales de
                acceso.
              </p>
            </div>
          </div>
          <TitleDetail text={"Respuesta rápida ante emergencias"} />
          <p className="text-md md:text-xl md:text-justify">
            La respuesta rápida ante emergencias es la capacidad de{" "}
            <span className="font-bold">actuar</span> de manera{" "}
            <span className="font-bold">eficiente</span> y{" "}
            <span className="font-bold">eficaz</span> ante{" "}
            <span className="font-bold">situaciones de riesgo</span>.{" "}
            <span className="font-bold text-dk_primary">
              ¿De qué manera lo implementamos?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                Blindaje tiene la capacidad de establecer Protocolos y Planes de
                Acción claros para cada tipo de emergencia.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Capacitación del personal:</span>{" "}
                Entrenar a los guardias de seguridad en primeros auxilios,
                manejo de extintores y evacuación.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Coordinación con autoridades:</span>{" "}
                Establecer contacto con la policía, bomberos y servicios de
                emergencia para una respuesta conjunta.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Simulacros:</span> Realizar
                simulacros periódicos para evaluar la efectividad de los
                protocolos y la preparación del personal.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:min-w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Provisión de equipamiento adecuado:
                </span>{" "}
                Es fundamental que nuestros Clientes puedan contar con equipos
                de protección personal, extintores, botiquines y otros elementos
                necesarios para la atención de emergencias.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
            Seguridad Electrónica
            <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
          </h2>

          <p className="text-md md:text-xl md:text-justify">
            La seguridad electrónica{" "}
            <span className="font-bold">utiliza tecnología</span> para detectar,
            prevenir y responder a amenazas. Se{" "}
            <span className="font-bold">integra</span> con la{" "}
            <span className="font-bold">seguridad física</span> para crear un{" "}
            <span className="font-bold">sistema de protección</span> más robusto
            y eficiente.
          </p>
          <TitleDetail text={"Sistemas de alarmas"} />
          <p className="text-md md:text-xl md:text-justify">
            Los sistemas de alarma <span className="font-bold">detectan</span>{" "}
            intrusiones, incendios u otras{" "}
            <span className="font-bold">emergencias</span>, y emiten alertas
            sonoras y visuales para disuadir a intrusos y alertar a los
            ocupantes.{" "}
            <span className="font-bold text-dk_primary">
              ¿Cómo lo conseguimos?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Diseño, provisión e instalación:
                </span>{" "}
                Adaptamos el sistema a las necesidades específicas de cada
                cliente, ubicando estratégicamente sensores y detectores.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Monitoreo 24/7:</span> Supervisión
                constante de las señales de alarma por personal capacitado, que
                puede alertar a las autoridades en caso de emergencia.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Mantenimiento y reparación:</span>{" "}
                Contamos con Personal para la revisión periódica del sistema,
                para garantizar su correcto funcionamiento, y reparación de
                fallas o averías.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Integración con otros sistemas:
                </span>{" "}
                Conectar la alarma con cámaras de seguridad, control de accesos
                y otros dispositivos para una respuesta coordinada.
              </p>
            </div>
          </div>
          <TitleDetail text={"Cámaras de seguridad"} />
          <p className="text-md md:text-xl md:text-justify">
            Las cámaras de seguridad graban imágenes y videos de las
            instalaciones, permitiendo{" "}
            <span className="font-bold">
              monitorear actividades, identificar
            </span>{" "}
            intrusos y obtener pruebas en caso de incidentes.{" "}
            <span className="font-bold">
              Asesoramos, proyectamos y ejecutamos
            </span>{" "}
            un Sistema de cobertura de Cámaras que se adapte a tus necesidades.
            <span className="font-bold text-dk_primary">¿Qué hacemos?</span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Instalación estratégica:</span>{" "}
                Ubicamos las cámaras en puntos clave para cubrir todas las áreas
                vulnerables.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Monitoreo remoto:</span> Opción para
                la visualización de las imágenes en tiempo real desde cualquier
                dispositivo conectado a internet.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Grabación y almacenamiento:</span>{" "}
                Almacenar las grabaciones de forma segura para su posterior
                revisión en caso de necesidad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Análisis de video:</span>{" "}
                Configuramos las cámaras para sacar el máximo provecho del
                software de análisis de video, para detectar comportamientos
                sospechosos.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Mantenimiento:</span> Limpieza de
                lentes, revisión de conexiones y actualización de software para
                garantizar la calidad de las imágenes.
              </p>
            </div>
          </div>
          <TitleDetail text={"Control de acceso electrónico"} />
          <p className="text-md md:text-xl md:text-justify">
            El control de acceso electrónico{" "}
            <span className="font-bold">regula</span> la{" "}
            <span className="font-bold">entrada y salida</span> de personas y
            vehículos mediante sistemas electrónicos, como tarjetas de
            proximidad, lectores de huellas dactilares o reconocimiento facial,
            para cada Cliente, existen muchas variantes de cada sistema.
            <p className="text-md md:text-xl md:text-justify">
              <span className="font-bold">Diseñamos e instalamos</span> el
              Sistema de Control de Acceso que se adapte a tus necesidades.
            </p>
            <span className="font-bold text-dk_primary">
              ¿Cómo lo logramos?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Instalación de dispositivos:</span>{" "}
                Instalar lectores de tarjetas, teclados numéricos o dispositivos
                biométricos en los puntos de acceso.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Gestión de credenciales:</span>{" "}
                Emitir, revocar y administrar las credenciales de acceso de
                empleados y visitantes.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Registro de accesos:</span> Mantener
                un registro detallado de quién entra y sale, a qué hora y por
                dónde.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Integración con otros sistemas:
                </span>{" "}
                Conectar el control de accesos con alarmas y cámaras de
                seguridad para una respuesta coordinada en caso de intentos de
                acceso no autorizado.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Mantenimiento:</span> Revisión y
                actualización del software y hardware del sistema para
                garantizar su seguridad y eficiencia.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
            Asesoramiento y Consultoría
            <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
          </h2>

          <p className="text-md md:text-xl md:text-justify">
            El asesoramiento y la consultoría son{" "}
            <span className="font-bold">servicios esenciales</span> para
            garantizar que nuestros clientes puedan{" "}
            <span className="font-bold">tomar decisiones</span> informadas y
            eficaces en materia de seguridad.
          </p>
          <TitleDetail text={"Diseño de sistemas de seguridad"} />
          <p className="text-md md:text-xl md:text-justify">
            El diseño de sistemas de seguridad implica la{" "}
            <span className="font-bold">creación</span> de{" "}
            <span className="font-bold">soluciones</span> personalizadas que se
            adapten a las necesidades específicas de cada uno de nuestros
            clientes, <span className="font-bold">teniendo en cuenta</span> sus{" "}
            <span className="font-bold">
              riesgos, vulnerabilidades y presupuesto.
            </span>
            <br />
            <span className="font-bold text-dk_primary">
              ¿Cómo abordamos esto?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Análisis de necesidades:</span>{" "}
                Evaluación de los riesgos y vulnerabilidades del Cliente, y
                definición de los objetivos de seguridad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Selección de tecnologías:</span>{" "}
                Recomendación de los sistemas de alarma, cámaras de seguridad y
                otros dispositivos más adecuados para cada caso.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Elaboración de planos y diagramas:
                </span>{" "}
                Diseño de la distribución de los dispositivos de seguridad en
                las instalaciones del cliente.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Estimación de costos:</span>{" "}
                Elaboración de presupuestos detallados que incluyan la
                instalación, el mantenimiento y el monitoreo de los sistemas de
                seguridad.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Integración de sistemas:</span>{" "}
                Diseño de soluciones que integren diferentes sistemas de
                seguridad para una protección más completa.
              </p>
            </div>
          </div>
          <TitleDetail text={"Capacitación del personal"} />
          <p className="text-md md:text-xl md:text-justify">
            La capacitación del personal <span className="font-bold">garantiza</span> que los guardias de seguridad y otros empleados estén <span className="font-bold">preparados</span> para <span className="font-bold">responder eficazmente</span> a situaciones de riesgo.
            <span className="font-bold text-dk_primary">
              ¿Cómo capacitamos al personal?
            </span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Diseño de programas de capacitación:</span>{" "}
                Elaboración de programas de capacitación personalizados que abarquen temas como primeros auxilios, manejo de extintores, control de accesos y respuesta a emergencias.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Impartición de cursos:</span>{" "}
                Realización de cursos teóricos y prácticos para guardias de seguridad y empleados.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">Evaluación de conocimientos:</span> Evaluación de los conocimientos y habilidades adquiridos por los participantes en los cursos.
              </p>
            </div>
            <div className="flex items-top gap-4">
              <div className="bg-dk_primary h-2 md:h-3 w-2 md:w-3 rounded-full mt-2"></div>
              <p className="text-md md:text-xl md:text-justify">
                <span className="font-bold">
                  Elaboración de manuales y guías:
                </span>{" "}
                Creación de materiales de apoyo para la capacitación del personal.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MainSection;
