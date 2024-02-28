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
      pattern:
        "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
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
      click: "{onClick(() => alert('hola'))}"
    },
  ];