const servEsterilizacion = document.querySelector("#serv-esterilizacion");
const servNeonatalogia = document.querySelector("#serv-neonatalogia");
const servLaboratorio = document.querySelector("#serv-laboratorio");
const servGuardia = document.querySelector("#serv-guardia");
const modalClosebutton = document.querySelector("#modal-close-button");
const servInternacion = document.querySelector("#serv-internacion");
const servImagenes = document.querySelector("#serv-imagenes");
const ecoCardHuerta = document.querySelector("#eco-card-huerta");

ecoCardHuerta.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");
  // 1. Seleccionas el elemento de la imagen por su ID
  const modalImage = document.getElementById("modal-dialog-image");
  // 2. Seteas el nuevo origen (ruta de la imagen)
  modalImage.src = "recursos/img/04-equipment/03-eco-sustentable.png";
  // 3. Seteas el nuevo texto alternativo (accesibilidad)
  modalImage.alt =
    "Imagen de la huerta eco sustentable del sanatorio del parque";
  modalImage.hidden = false;
  document.getElementById("modal-dialog-title").innerText = "";
  var text =
    "<p>Formamos parte de la Red Global de Hospitales Verdes y Saludables, una iniciativa de Salud sin Daño que reúne a centros y sistemas de salud, y organizaciones profesionales y académicas vinculadas con el sector que buscan reducir su huella ecológica y promover la salud ambiental pública.</p>";
  text +=
    "<p>Nuestra infraestructura ecosustentable se basa en un uso responsable de los recursos naturales. Desde los materiales seleccionados para su construcción hasta la implementación de un sistema de gestión de edificios (Bulding Manangement System - BMS) que permite la automatización integral de funciones clave.</p>";
  text += "<h4>Contamos con:</h4>";
  text +=
    "<ul><li>Protección solar en las fachadas con doble vidriado hermético.</li>";
  text +=
    "<li>Terrazas verdes para reducir el efecto isla de calor y optimizar la aislación térmica.</li>";
  text +=
    "<li>Reutilización de aguas grises y pluviales para riego y descarga de sanitarios.</li>";
  text +=
    "<li>Iluminación de bajo consumo en todo el edificio, luz natural en los grandes halls y tecnología LED en exteriores.</li>";
  text += "</ul>";

  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

servEsterilizacion.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");
  const modalImage = document.getElementById("modal-dialog-image");
  modalImage.src = "";
  modalImage.hidden = true;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de esterilización";
  document.getElementById("modal-dialog-content").innerHTML =
    '<p>La Central de Esterilización del <strong translate="no">Sanatorio del parque</strong> se encuentra ubicada en el tercer piso de la torre, junto al Centro Quirúrgico. Su misión es esterilizar los productos médicos que se utilizan en la atención de los pacientes a través del cumplimiento de normas y procedimientos, contribuyendo al cuidado de la salud y a la prevención de las infecciones. Proporciona los materiales, equipos e instrumental médico en condiciones de esterilidad a todos los sectores de la institución y en forma oportuna, así como su correcta protección para la realización de los diferentes procedimientos diagnósticos y terapéuticos.Para lograr la mejora de los procesos de la Central de Esterilización, se elaboran normas que sirven como instrumento para el desarrollo de las actividades que se realizan y para la adecuada preparación y formación estandarizada del personal responsable de las tareas del sector.</p>';

  alertDialog.showModal();
});

servNeonatalogia.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");
  // 1. Seleccionas el elemento de la imagen por su ID
  const modalImage = document.getElementById("modal-dialog-image");
  // 2. Seteas el nuevo origen (ruta de la imagen)
  modalImage.src = "recursos/img/03-services/02-neo.jpg";
  // 3. Seteas el nuevo texto alternativo (accesibilidad)
  modalImage.alt = "Imagen de la sala de neonatalogia";
  modalImage.hidden = false;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de neonatalogía";
  var text =
    "<p>Nuestro <strong>Departamento de Neonatología</strong> está integrado por una Unidad de Cuidados Intensivos e Intermedios de alta complejidad que cuenta con los últimos avances tecnológicos, un Sector de Atención de Recién Nacido Sano, uno de Recepción en Centro Obstétrico y otro de Consultorios Externos.</p>";
  text +=
    "<p>Todos ellos cuentan con equipamiento de última generación y personal altamente capacitado. En todos estos sectores se trabaja con el concepto de maternidad centrada en la familia, facilitando el vínculo temprano y apoyando la participación de los padres en el cuidado de sus hijos.</p>";
  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

servLaboratorio.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");

  const modalImage = document.getElementById("modal-dialog-image");
  modalImage.src = "";
  modalImage.hidden = true;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de laboratorio";
  var text =
    "<h4>Laboratorio y Análisis Clínicos</h4><p>Nuestro Laboratorio de Análisis Clínicos realiza estudios de alta complejidad con la excelencia que la medicina moderna requiere. Cada estudio sustenta la confiabilidad de sus resultados en equipos provistos de tecnología de punta, conectados online con el sistema de informes, y la habilidad de un personal técnico altamente capacitado. </p>";
  text +=
    "<h4>Conociendo Nuestro Laboratorio</h4><p>El laboratorio es uno de los adalides del país en la aplicación de tecnología de última generación para obtener resultados precisos, rápidos y confiables.</p>";
  text +=
    "<p>Cuenta con autoanalizadores en química clínica, inmunoensayo, hematología, hemostasia, bacteriología, conectados online con el sistema de gestión del laboratorio, lo que permite tener la seguridad del trazado de las muestras de cada paciente, que identificadas a través de un código de barra, no permite cruzamientos.</p>";
  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

servGuardia.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");

  const modalImage = document.getElementById("modal-dialog-image");
  modalImage.src = "";
  modalImage.hidden = true;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de guardia";
  var text =
    "<p>El Servicio de Guardia dispone de un plantel de médicos especialistas en emergentología y terapia intensiva que realizan la evaluación inicial de pacientes derivados de otros centros y/o que ingresan en forma espontánea.</p>";
  text +=
    "<p>El manejo asistencial se encuentra normatizado con Sistemáticas del Servicio. Se realiza un seguimiento lineal del paciente por medio de pases de guardia supervisados por coordinadores médicos y Jefatura de Guardia.</p>";
  text +=
    "<h4>Especialidades de guardia permanente:</h4><ul><li>Clínica médica</li><li>Traumatología</li><li>Cirugía general</li><li>Ginecología y Obstetricia</li><li>Ecografía</li><li>Pediatría</li></ul>";
  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

servInternacion.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");

  const modalImage = document.getElementById("modal-dialog-image");
  modalImage.src = "";
  modalImage.hidden = true;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de internación general";
  var text =
    "<span class='modal-italic'>Además de la excelencia médica, nuestra concepción de un contexto sano incluye el confort y atención de primer nivel para el paciente y su entorno familiar.</span>";
  text +=
    "<p>El servicio cuenta con <strong>144 suites</strong> de internación general de adultos. Todas las suites tienen teléfono, TV LCD, conexión a Internet, cama para acompañante, baño completo y compartimentado con elementos de primera categoría, y una sala de estar que ofrece el ámbito ideal para el visitante. Este concepto de internación logra la mejor interacción entre médicos, enfermeras, paciente y familiares, al asegurar privacidad y confort en cualquier situación.</p>";
  text +=
    "<p>Está compuesto por un jefe de servicio, 4 coordinadores y 22 médicos de planta que garantizan la continuidad de la atención de los pacientes entre las 8 y 21 h, y con presencia rotativa los fines de semana complementándose con médicos de guardia nocturna para garantizar la comunicación de la situación de los pacientes.</p>";
  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

servImagenes.addEventListener("click", function () {
  const alertDialog = document.querySelector("#modal-dialog");

  const modalImage = document.getElementById("modal-dialog-image");
  modalImage.src = "";
  modalImage.hidden = true;
  document.getElementById("modal-dialog-title").innerText =
    "Servicio de imágenes";
  var text =
    "<p>Este servicio dispone de todos los elementos que la tecnología biomédica ha desarrollado, incluyendo resonancia nuclear magnética y tomografía computada.</p>";
  text += "<ul>";
  text +=
    "<li><strong>Sala de tomografía:</strong> tomógrafo multicortes de 16 slices Philips, modelo Brillance 16.</li>";
  text +=
    "<li><strong>Sala de resonancia:</strong> resonador magnético de 1.5 Tesla Philips, modelo Achieva.</li>";
  text +=
    "<li><strong>Sala de procedimientos radiológicos contrastados:</strong> seriógrafo Digital Philips, modelo Easy Diagnost Eleva.</li>";
  text +=
    "<li><strong>Sala de radiología:</strong> equipo de rayos convencional Philips, modelo Bucky Diagnost CS.</li>";
  text +=
    "<li><strong>Sala de resonancia:</strong> resonador magnético 3 Tesla Philips, modelo Ingenia.</li>";
  text +=
    "<li><strong>Sala de tomografía:</strong> tomógrafo multicortes de 64 slices Philips, modelo Brillance 64.</li>";
  text += "</ul>";
  document.getElementById("modal-dialog-content").innerHTML = text;
  alertDialog.showModal();
});

modalClosebutton.addEventListener("click", function (event) {
  // Evita que el enlace <a> intente navegar o recargar la página
  event.preventDefault();

  const alertDialog = document.querySelector("#modal-dialog");

  // El método nativo correcto de HTML5 es .close()
  alertDialog.close();
});
