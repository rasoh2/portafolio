import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

/**
 * Componente Contact - Formulario de contacto optimizado
 * - Validación avanzada en tiempo real (nombre, email, longitud de mensaje).
 * - Envío asíncrono real mediante EmailJS.
 * - Alertas y estados animados mediante Framer Motion.
 * - Enlaces profesionales que se abren en nuevas pestañas (SEO/Seguridad).
 */
function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    title: "",
    message: "",
  });

  // Estado para guardar mensajes de error de validación
  const [errors, setErrors] = useState({});

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    errorMessage: ""
  });

  // Expresión regular para validación de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validación individual en base al cambio del input
  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "nombre") {
      if (value.trim().length < 3) {
        errorMsg = "El nombre debe tener al menos 3 caracteres.";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        errorMsg = "El correo electrónico es requerido.";
      } else if (!emailRegex.test(value)) {
        errorMsg = "Por favor, ingresa un correo electrónico válido.";
      }
    } else if (name === "title") {
      if (value.trim().length < 4) {
        errorMsg = "El asunto debe tener al menos 4 caracteres.";
      }
    } else if (name === "message") {
      if (value.trim().length < 10) {
        errorMsg = "El mensaje debe tener al menos 10 caracteres.";
      }
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  // Validaciones antes de enviar
  const validateForm = () => {
    const newErrors = {};
    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (formData.title.trim().length < 4) {
      newErrors.title = "El asunto debe tener al menos 4 caracteres.";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Detiene si hay errores
    }

    setFormStatus({ submitting: true, submitted: false, error: false, errorMessage: "" });

    try {
      // Configuración de EmailJS (los IDs provistos en el código original)
      await emailjs.send(
        "service_ajdpxs8", 
        "template_0uey8lt", 
        formData,
        "C8-WrHIIgWEB1FXae"
      );
      setFormStatus({ submitting: false, submitted: true, error: false, errorMessage: "" });
      setFormData({ nombre: "", email: "", title: "", message: "" });
      setErrors({});

      // Ocultar mensaje de éxito tras 6 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 6000);
    } catch (err) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: true, 
        errorMessage: err.text || "Ocurrió un error inesperado al enviar el correo." 
      });
    }
  };

  return (
    <section id='contact' className='contact-section py-5'>
      <div className='container'>
        
        {/* Título de la sección */}
        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <motion.h2 
              className='section-title'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contacto
            </motion.h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              Si buscas un analista programador comprometido, práctico y listo para trabajar en equipo, ponte en contacto conmigo.
            </p>
          </div>
        </div>

        <div className='row justify-content-center g-4'>
          {/* Información de contacto */}
          <div className='col-lg-4'>
            <motion.div 
              className='contact-info d-flex flex-column justify-content-between'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className='mb-4 text-highlight fw-bold'>Información Directa</h3>

                {/* Email */}
                <div className='contact-info-item mb-4'>
                  <div className='contact-icon'>
                    <i className='fas fa-envelope'></i>
                  </div>
                  <div className='contact-details'>
                    <h5>Email</h5>
                    <a href='mailto:sebastian.ortega.auriol@gmail.com'>
                      sebastian.ortega.auriol@gmail.com
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className='contact-info-item mb-4'>
                  <div className='contact-icon'>
                    <i className='fas fa-phone'></i>
                  </div>
                  <div className='contact-details'>
                    <h5>Teléfono</h5>
                    <a href='tel:+56966753705'>+56 9 667 53705</a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className='contact-info-item mb-4'>
                  <div className='contact-icon'>
                    <i className='fas fa-map-marker-alt'></i>
                  </div>
                  <div className='contact-details'>
                    <h5>Ubicación</h5>
                    <p>Santiago, Chile</p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className='contact-social mt-4'>
                <h5 className='mb-3 font-monospace text-info'>Canales Profesionales</h5>
                <div className='social-links'>
                  <motion.a
                    href='https://github.com/rasoh2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub de Sebastian"
                  >
                    <i className='fab fa-github'></i>
                  </motion.a>
                  <motion.a
                    href='https://www.linkedin.com/in/ortegaauriol'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link'
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn de Sebastian"
                  >
                    <i className='fab fa-linkedin'></i>
                  </motion.a>
                  <motion.a
                    href='mailto:sebastian.ortega.auriol@gmail.com'
                    className='social-link'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Email de Sebastian"
                  >
                    <i className='fas fa-envelope'></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Formulario */}
          <div className='col-lg-6'>
            <motion.div 
              className='contact-form-wrapper'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className='mb-4 text-highlight fw-bold'>Envíame un Mensaje</h3>

              <form onSubmit={handleSubmit} className='contact-form' noValidate>
                {/* Nombre */}
                <div className='mb-3'>
                  <label htmlFor='nombre' className='form-label'>
                    Nombre Completo *
                  </label>
                  <input
                    type='text'
                    className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                    id='nombre'
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder='Tu nombre y apellido'
                    required
                  />
                  {errors.nombre && <div className='invalid-feedback'>{errors.nombre}</div>}
                </div>

                {/* Email */}
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Correo Electrónico *
                  </label>
                  <input
                    type='email'
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='tu@correo.com'
                    required
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>

                {/* Asunto */}
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                    Asunto *
                  </label>
                  <input
                    type='text'
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Motivo de contacto'
                    required
                  />
                  {errors.title && <div className='invalid-feedback'>{errors.title}</div>}
                </div>

                {/* Mensaje */}
                <div className='mb-4'>
                  <label htmlFor='message' className='form-label'>
                    Mensaje *
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='4'
                    placeholder='Escribe tu mensaje aquí en detalle...'
                    required
                  ></textarea>
                  {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
                </div>

                {/* Botón de envío */}
                <motion.button
                  type='submit'
                  className='btn btn-primary btn-lg w-100'
                  disabled={formStatus.submitting}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.submitting ? (
                    <>
                      <span
                        className='spinner-border spinner-border-sm me-2'
                        role='status'
                        aria-hidden='true'
                      ></span>
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <i className='fas fa-paper-plane me-2'></i>
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>

                {/* Alertas Animadas con AnimatePresence */}
                <AnimatePresence>
                  {formStatus.submitted && (
                    <motion.div 
                      className='alert alert-success mt-4 d-flex align-items-center' 
                      role='alert'
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className='fas fa-check-circle me-2' style={{ fontSize: "1.2rem" }}></i>
                      <div>
                        <strong>¡Mensaje enviado!</strong> Gracias por escribir. Te responderé a la brevedad.
                      </div>
                    </motion.div>
                  )}

                  {formStatus.error && (
                    <motion.div 
                      className='alert alert-danger mt-4 d-flex align-items-center' 
                      role='alert'
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className='fas fa-exclamation-circle me-2' style={{ fontSize: "1.2rem" }}></i>
                      <div>
                        <strong>Hubo un problema:</strong> {formStatus.errorMessage}. Por favor, vuelve a intentarlo o escríbeme directamente por correo.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
