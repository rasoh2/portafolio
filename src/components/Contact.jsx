/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Componente Contact - Sección de contacto con formulario funcional
 * Permite a visitantes enviar mensajes directamente
 */
function Contact() {
  // Estados para el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simula el envío del formulario (aquí integrarías tu servicio real)
    try {
      await emailjs.send(
        "service_5f4f4d5", // Reemplaza por tu Service ID
        "template_5f4f4d5", // Reemplaza por tu Template ID
        formData,
        "C8-WrHIIgWEB1FXae", // Tu Public Key
      );
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id='contact' className='contact-section py-5'>
      <div className='container'>
        {/* Título de la sección */}
        <div className='row'>
          <div className='col-12 text-center mb-5' data-aos='fade-up'>
            <h2 className='section-title'>Contacto</h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>
        </div>

        <div className='row justify-content-center'>
          {/* Información de contacto */}
          <div className='col-lg-4 mb-4' data-aos='fade-right'>
            <div className='contact-info'>
              <h3 className='mb-4'>Información de Contacto</h3>

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

              {/* Redes sociales */}
              <div className='contact-social mt-4'>
                <h5 className='mb-3'>Sígueme en:</h5>
                <div className='social-links'>
                  <a
                    href='https://github.com/rasoh2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link'
                  >
                    <i className='fab fa-github'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/ortegaauriol'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link'
                  >
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a
                    href='mailto:sebastian.ortega.auriol@gmail.com'
                    className='social-link'
                  >
                    <i className='fas fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className='col-lg-6' data-aos='fade-left'>
            <div className='contact-form-wrapper'>
              <h3 className='mb-4'>Envíame un Mensaje</h3>

              <form onSubmit={handleSubmit} className='contact-form'>
                {/* Nombre */}
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Nombre Completo *
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Tu nombre'
                  />
                </div>

                {/* Email */}
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email *
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='tu@email.com'
                  />
                </div>

                {/* Asunto */}
                <div className='mb-3'>
                  <label htmlFor='subject' className='form-label'>
                    Asunto *
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder='Asunto del mensaje'
                  />
                </div>

                {/* Mensaje */}
                <div className='mb-3'>
                  <label htmlFor='message' className='form-label'>
                    Mensaje *
                  </label>
                  <textarea
                    className='form-control'
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    placeholder='Escribe tu mensaje aquí...'
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button
                  type='submit'
                  className='btn btn-primary btn-lg w-100'
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span
                        className='spinner-border spinner-border-sm me-2'
                        role='status'
                        aria-hidden='true'
                      ></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className='fas fa-paper-plane me-2'></i>
                      Enviar Mensaje
                    </>
                  )}
                </button>

                {/* Mensaje de éxito */}
                {formStatus.submitted && (
                  <div className='alert alert-success mt-3' role='alert'>
                    <i className='fas fa-check-circle me-2'></i>
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </div>
                )}

                {/* Mensaje de error */}
                {formStatus.error && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    <i className='fas fa-exclamation-circle me-2'></i>
                    Hubo un error al enviar el mensaje. Por favor, intenta de
                    nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
