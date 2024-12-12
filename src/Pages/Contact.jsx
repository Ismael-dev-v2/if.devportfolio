// import React from 'react'
import Icons from '../components/Icons'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validation, SetValidation] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Aquí debes colocar tus claves de servicio y plantilla de EmailJS
    const serviceID = 'service_y52d9gn'
    const templateID = 'template_orbp6db'
    const userID = 'jpJ3k9WVwOi5NFWvD'

    const templateParams = {
      name: name,
      email: email,
      message: message,
    }

    // Enviar el email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Correo enviado:', response)
        SetValidation(true);
        setName('');          // Limpiar los campos del formulario
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Error al enviar el correo:', err)
        alert('Hubo un error al enviar el mensaje.')
      })
      
  }

  const handleClose = () => {
    SetValidation(false);  // Cerrar la ventana emergente
  };

  return (
    <>
    <div className={`fondo z-10 w-screen absolute bg-black opacity-60 ${validation ===  false ? 'hidden' : ''}`}></div>
    <form className={`absolute bg-zinc-800 text-white flex  items-center justify-center gap-5 p-10 flex-col z-20 ${validation ===  false ? 'hidden' : ''}`}>
      <h1 className='text-3xl'>Mensaje enviado correctamente!</h1>
      <button onClick={handleClose} className="border p-3 text-lg">cerrar pestaña</button>  
    </form>  
      <div className="h-full mb-14 max-sm:w-full">
        <div>
          <Fade direction="up" triggerOnce={true}>
            <Link to="/" className="flex items-center text-[15px] font-medium py-2 return">
              <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
              Back to Home
            </Link>
          </Fade>

          <Fade direction="up" delay="10" triggerOnce={true}>
            <h1 className="text-6xl font-bold mb-9 max-sm:text-[40px]">Contacto</h1>
            <p className="text-[#888b8f]">Listo para colaborar en un nuevo proyecto? ¡No dudes en contactarme!</p>
          </Fade>

          <Fade direction="up" triggerOnce={true}>
            <Icons />
          </Fade>
        </div>

        <p className="mb-9 font-semibold">Enviame un correo!</p>
        <form className="flex-col flex" onSubmit={handleSubmit}>
          <label className="max-sm:flex">
            <input
              required
              className="rounded-md p-3 pr-12 mr-3 border border-transparent focus:outline-none max-sm:max-w-[165px]"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              className="rounded-md p-3 pr-12 border border-transparent focus:outline-none max-sm:max-w-[165px]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <textarea
              required
              className="rounded-md p-3 w-full h-36 mt-3 border border-transparent focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="font-semibold bg-slate-100 text-stone-950 rounded-lg p-3 mt-2 hover:bg-slate-300 transition-all ease-in"
          >
            Enviar
          </button>
        </form>

        {/* <div className="my-16 flex items-center justify-center max-sm:flex-col">
        <a className="font-semibold" href="https://wa.me/51987654321" target="blank">
          +51 987654321
        </a>
        <p className="ml-10 max-sm:ml-0 max-sm:mt-6">my-email@gmail.com</p>
      </div> */}

        <p className="mt-16 mb-10 text-sm text-gray-400 font-medium text-center">
          <span className="mr-2">© 2024 Simplefolio</span>
          <strong>•</strong>
          <span className="ml-2">
            Made with ❤️ by
            <a href="https://github.com/" target="blank" className="ml-1 text-fuchsia-200">
              Me
            </a>
          </span>
        </p>
      </div>
    </>
  )
}

export default Contact
