export const ventajas = [
  {
    title: "Programación Web 1 ",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web 2",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web 3 ",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web 4",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web 5",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web 6",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
];

export const desventajas = [
  {
    title: "Programación Web Copada",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web mala",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
  {
    title: "Programación Web no jodas",
    text: `Hola como estan estas son las coasa que no puedo solucionar`,
  },
];

export const formu = [
  {
    type: "text",
    placeholder: "Ingresa tu nombre *",
    title: "Nombre sólo acepta letras y espacios en blanco",
    pattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$",
    name: "user_name",
    required: true,
    input: "input",
    key: "1",
  },
  {
    type: "email",
    placeholder: "Ingresa tu correo *",
    title: "Email incorrecto",
    pattern: "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
    name: "user_email",
    required: true,
    input: "input",
    key: "2",
  },
  {
    placeholder: "Déjame tus comentarios *",
    name: "message",
    required: true,
    input: "textarea",
    cols: "50",
    rows: "10",
    key: "3",
  },
  {
    class: "btn",
    required: false,
    input: "input",
    type: "submit",
    value: "ENVIAR MENSAJE",
    key: "4",
    click: "{onClick(() => alert('hola'))}",
  },
];

export const portfolio = [
  {
    title: "Proyecto Primero",
    text: "primer proyecto",
    trabajo: "trabajo-1",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 1",
  },

  {
    title: "Proyecto Segundo",
    text: "primer proyecto",
    trabajo: "trabajo-2",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 2",
  },

  {
    title: "Proyecto Tercero",
    text: "primer proyecto",
    trabajo: "trabajo-3",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 3",
  },
];

export const modal = [
  {
    id: "trabajo-1",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 1",
    title: "Proyecto numero 1",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque",
  },
  {
    id: "trabajo-2",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 2",
    title: "Proyecto numero 2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque",
  },
  {
    id: "trabajo-3",
    image: "assets/portfolio.jpg",
    alt: "Trabajo 3",
    title: "Proyecto numero 3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque",
  },
];

export const catalogo = [
  {
    link: "amazon.com",
    nombre: "nombre del producto",
    prime: false,
    precioTach: "200 $",
    precioNorm: "100 $",
  },
  {
    link: "amazon.com",
    nombre: "nombre del producto",
    prime: false,
    precioTach: "200 $",
    precioNorm: "100 $",
  },
];
