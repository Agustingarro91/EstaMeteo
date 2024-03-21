import { format  } from "@formkit/tempo"

export const año = format(new Date(), "YYYY", "es")


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
    title: "Formato email",
    pattern: "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
    name: "user_email",
    required: true,
    input: "input",
    key: "2",
  },
  {
    placeholder: "Escribe aqui tus comentarios *",
    title: "Escribe aqui tus comentarios",
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
    title: "ENVIAR MENSAJE",
    key: "4",
    click: "{onClick(() => alert('hola'))}",
  },
];

export const portfolio = [
/*   {
    title: "MISOL HP2550 Wi-Fi",
    text: "",
    link: "/froggit-hp-1000-se-pro-wifi",
    image: "http://www.misolweather.com/uploads/ueditor/20211125/65a678688861d51afd6085cb808ebbf9.jpg",
    alt: "Trabajo 1",
  }, */
  {
    title: "Froggit HP1000SE PRO Wi-Fi  ",
    text: "",
    link: "/froggit-hp-1000-se-pro-wifi",
    image: "https://www.froggit.de/images/product_images/info_images/HP1000SE_PRO_Galerie.jpg",
    alt: "Trabajo 1",
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
    id:5415151,
    link: "amazon.com",
    nombre: "nombre del producto",
    linkPrime: 'vaya a saber uno',
    img:"https://m.media-amazon.com/images/I/41UYNi11UPL._SL160_.jpg",
    alt: 'ver de donde sale',
    title:'otra cosamas que tenemos que ver',
    prime: false,
    precioTach: "200 $",
    precioNorm: "100 $",
  }, 
   {
    id:541151,
    link: "amazon.com",
    nombre: "nombre del producto",
    linkPrime: 'vaya a saber uno',
    img:"https://m.media-amazon.com/images/I/41UYNi11UPL._SL160_.jpg",
    alt: 'ver de donde sale',
    title:'otra cosamas que tenemos que ver',
    prime: false,
    precioTach: "200 $",
    precioNorm: "100 $",
  },  
  {
    id:545151,
    link: "amazon.com",
    nombre: "nombre del producto",
    linkPrime: 'vaya a saber uno',
    img:"https://m.media-amazon.com/images/I/41UYNi11UPL._SL160_.jpg",
    alt: 'ver de donde sale',
    title:'otra cosamas que tenemos que ver',
    prime: false,
    precioTach: "200 $",
    precioNorm: "100 $",
  },
];

/* Cluster */
export const cluster = [
  {
    link: 'froggit-hp-1000-se-pro-wifi',
    img: 'https://www.froggit.de/images/product_images/info_images/HP1000SE_PRO_Galerie.jpg',
    titulo: 'Froggit HP1000SE PRO Wi-Fi'
  },
]

export const clusterMarcas = [

  {
    link: '#',
    img: 'MarcaFroggit-390x200.jpg',
    titulo: 'Estación Merteorologica Froggit '
  },
  {
    link: '#',
    img: 'MarcaMisol-390x200.jpg',
    titulo: 'Estación Merteorologica Misol '
  },
  {
    link: '#',
    img: 'MarcaDavis-390x200.jpg',
    titulo: 'Estación Merteorologica Davis '
  },
]

export const clusterTipos = [

  {
    link: '#',
    img: 'EstacionInalambrica.jpg',
    titulo: 'Estación Merteorologica Inalambrica '
  },
]

/*  Fin Cluster */


export const producto = [
  {
    img:"https://m.media-amazon.com/images/I/41UYNi11UPL._SL160_.jpg",
    title:"Weber - Barbacoa de gas Q1000 50060079, gris",
    caracteristicas:[
      "probando 1", "probando 2"
    ],
    precioNor:200,
    precioTach:300,
    link: "amazon.com"
  }
  
]


/* Header Links */
export const marcas = [
 {marca:"Misol", link:"todavia no lo tengo"}, 
  {marca:"Froggit", link:"todavia no lo tengo"},
]


export const tipos = [
  {tipo: "Wifi", link: "/wifi"}, 
   {tipo:"Profesional", link: "/profesional"}, 
   {tipo:"Inalambrica", link: "/inalambrica"},
   {tipo:"Portatil", link: "/portatil"}, 

 ]

 export const reseñas = [
  {reseña: "Froggit HP1000SE PRO Wi-Fi", link: "/froggit-hp-1000-se-pro-wifi"  }, 
 /*  {reseña: "MISOL HP2550 Wi-Fi", link: "/misol-hp-2550-wifi"},  */
 ]


 export const opiniones = [
  {
    opinion: <p>Opinion 5/5 &#128525; </p>,
    link: "https://amzn.to/3Vm6yfN",
    texto: "Es un gran producto. Muy satisfecho. La pantalla buena calidad y diseño gráfico espectacular, multitud de añadir . . . Está bien diseñada. Tiene bastantes opciones para poder calibrar todo. Lo que no me gusta es"
  }, {
    opinion: <p> Opinion 4/5 &#129300; </p>,
    link: "https://amzn.to/43p0jtE",
    texto: "Está bien diseñada. Tiene bastantes opciones para poder calibrar todo. Lo que no me gusta es . . ."
  },
 ]