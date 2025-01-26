import img1 from './assets/img/work1.jpeg'
import img2 from './assets/img/work2.jpeg'
import img3 from './assets/img/work3.jpeg'
import img4 from './assets/img/work4.jpeg'
import img5 from './assets/img/work5.jpg'
import img6 from './assets/img/work6.png'

import img7 from './assets/img/info1.jpeg'
import img8 from './assets/img/info2.jpeg'
import img9 from './assets/img/info3.jpeg'
import img10 from './assets/img/info4.jpeg'
import img11 from './assets/img/info5.png'
import img12 from './assets/img/info6.png'
// import icon1 from './assets/icons/twitter.png'
// import icon2 from './assets/icons/dribbble.png'
// import icon3 from './assets/icons/linkedin.png'

export const projects = [
  {
    id: 1,
    image1: img1,
    image2: img7,
    name: 'ClothesMarket',
    title: 'ClothesMarket',
    category: 'React',
    category2: 'JS',
    category3: 'E-commerce',
    // class: 'work__img',
    url1: 'https://github.com/Ismael-dev-v2/Clothes',
    url2: 'https://clothesmarket2.netlify.app',
    resume:
      'En mi página web de compra de ropa, he implementado un carrito de compras utilizando los hooks de React, específicamente useState y useEffect, lo que permite a los usuarios agregar y gestionar productos dentro del carrito en tiempo real. Además, para mejorar la experiencia del usuario, he integrado un carrusel de imágenes en la página de inicio, mostrando diversos productos o promociones de manera interactiva y visualmente atractiva. Esto no solo mejora la presentación del sitio, sino que también lo hace más dinámico y moderno.',
    info1:
      ' he implementado un filtro en el apartado de stock que permite a los usuarios refinar su búsqueda y encontrar más fácilmente los productos que les interesan. Además, he añadido una animación interactiva al botón de "Agregar al carrito", que proporciona una retroalimentación visual al usuario, indicándole que su producto ha sido añadido correctamente al carrito.',
    info2:
      'Los productos se muestran a partir de un arreglo de objetos que contiene información como el nombre, descripción, precio e imagen de cada artículo. Este listado se filtra dinámicamente utilizando filteredProductos.map() para recorrer los productos que cumplen con los criterios de búsqueda.',
  },
  {
    id: 2,
    image1: img2,
    image2: img8,
    name: 'ColorPaleteGenerator',
    title: 'Color Palete Generator',
    category: 'React',
    category2: 'JS',
    category3: 'Generador de colores',
    url1: 'https://github.com/Ismael-dev-v2/ColorPalateGenerator',
    url2: 'https://colorpaletegenerator.netlify.app',
    resume:
      'Desarrollé una página web que genera 40 tonos distintos basados en el color que ingresa el usuario. Para crear el generador de colores, utilicé la librería Values.js, que me permitió generar variaciones del color ingresado',
    info1:
      'implementé la funcionalidad para copiar el código de color, lo que facilita al usuario trabajar con los colores generados. Todo el proyecto está gestionado mediante useState, que me permite manejar los cambios de estado de manera eficiente y dinámica.',
  },
  {
    id: 3,
    image1: img3,
    image2: img9,
    name: 'SbeamClone',
    title: 'SbeamClone',
    category: 'React',
    category2: 'JS',
    category3: 'CSS',
    url1: 'https://github.com/',
    url2: 'https://sbeamclone.netlify.app',
    resume:
      'Este proyecto consiste en una réplica visual del formulario de inicio de sesión de la página de Steam, creada como ejercicio para mejorar mis habilidades en HTML y CSS. La página no tiene ninguna funcionalidad o interacción real; su único propósito es reproducir lo más fielmente posible el aspecto y diseño de la interfaz de Steam.',
    info1:
      'Durante el proceso de desarrollo, presté especial atención a los detalles del diseño, incluyendo la disposición de los elementos, la tipografía y el estilo general de la página original. No obstante, para evitar cualquier conflicto de derechos de autor (copyright), he realizado algunos ajustes, como modificar los logotipos y las imágenes clave.',
    info2:
      'Es importante mencionar que el código fuente de este proyecto está alojado en un repositorio privado en GitHub, no accesible al público. Esta medida se tomó tanto por razones de seguridad como para asegurar que no se infringen los derechos de propiedad intelectual de Steam. Además, la página está configurada de manera que no permite el acceso a herramientas de desarrollo como "Inspeccionar" en el navegador.',
    info3:
      'En resumen, este proyecto es un ejercicio puramente educativo, enfocado en la práctica de diseño web, sin ningún tipo de uso comercial o funcionalidad que permita una interacción real como en la página original de Steam.',
  },
  {
    id: 4,
    image1: img4,
    image2: img10,
    name: 'Chat React',
    title: 'Chat React',
    category: 'React',
    category2: 'JS',
    category3: 'Socket.io',
    url1: 'https://github.com/Ismael-dev-v2/ChatReactSocket.io',
    url2: '',
    resume:
      'El proyecto Chat React es una aplicación que desarrollé utilizando Socket.io, inspirado en un video tutorial de FaztCode. Este proyecto combina tanto el frontend como el backend, aprovechando las capacidades de Socket.io, una biblioteca que facilita la comunicación en tiempo real, permitiendo el intercambio de mensajes entre múltiples clientes y un servidor.',
    info1:
      'En el backend, utilicé Node.js junto con Express.js, un framework que simplifica el desarrollo de aplicaciones en Node.js. Además, realicé una personalización al implementar un sistema de registro de nombres de usuario, lo cual añade una funcionalidad extra para mejorar la experiencia del usuario. En el frontend, integré TailwindCSS',
    info2:
      'Lamentablemente, no he podido encontrar un servicio de hosting gratuito para desplegar el proyecto, y mi situación actual no me permite acceder a opciones de pago. Sin embargo, el repositorio está disponible públicamente, por si deseas explorar el código o probarlo de manera local. ¡Espero que lo encuentres interesante!',
  },
  // {
  //   id: 5,
  //   image1: img5,
  //   image2: img11,
  //   name: 'MyApp5',
  //   title: 'My App 5',
  //   category: 'Vue',
  //   url1: 'https://github.com/',
  //   url2: 'https://vercel.com/',
  //   resume:
  //     'A organization app to resolve certain life issues and allows you controll your time more... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, perspiciatis consectetur. Tempora quos, totam mollitia illum ullam.',
  //   info1:
  //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, autem. Aliquid officia odio molestiae repellat beatae error quae sint saepe sapiente, laboriosam voluptas labore nulla tenetur aspernatur culpa non quisquam.',
  //   info2:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laborum. Deleniti,pariatur? Quo excepturi itaque natus eligendi fugiat, adipisci aspernatur!',
  //   info3:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam nam asperiores illo a quidem, facilis pariatur.',
  // },
  // {
  //   id: 6,
  //   image1: img6,
  //   image2: img12,
  //   name: 'MyApp6',
  //   title: 'My App 6',
  //   category: 'Firebase',
  //   url1: 'https://github.com/',
  //   url2: 'https://vercel.com/',
  //   resume:
  //     'A organization app to resolve certain life issues and allows you controll your time more... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, perspiciatis consectetur. Tempora quos, totam mollitia illum ullam.',
  //   info1:
  //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, autem. Aliquid officia odio molestiae repellat beatae error quae sint saepe sapiente, laboriosam voluptas labore nulla tenetur aspernatur culpa non quisquam.',
  //   info2:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laborum. Deleniti,pariatur? Quo excepturi itaque natus eligendi fugiat, adipisci aspernatur!',
  //   info3:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam nam asperiores illo a quidem, facilis pariatur.',
  // },
]
