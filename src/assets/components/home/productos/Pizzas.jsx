
const pizzas = [
  {
    id: "p001",
    nombre: "Napolitana",
    descripcion: "La pizza napolitana, de masa tierna y delgada pero bordes altos, ideal para los amantes de lo clásico.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
    precio: 59.50, // Precio en formato decimal
  },
  {
    id: "p002",
    nombre: "Española",
    descripcion: "La pizza española, un clásico que no puede faltar en tu mesa, con mozzarella y choricillo.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    ingredientes: ["mozzarella", "tomates", "jamón", "choricillo"],
    precio: 72.50,
  },
  {
    id: "p003",
    nombre: "Salame",
    descripcion: "Deliciosa pizza con salame y mozzarella, perfecta para compartir.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    ingredientes: ["mozzarella", "tomates", "salame", "orégano"],
    precio: 59.90,
  },
  {
    id: "p004",
    nombre: "Cuatro Estaciones",
    descripcion: "Una combinación de sabores: aceitunas, champiñones, jamón y más en cada porción.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
    ingredientes: ["mozzarella", "salame", "aceitunas", "champiñones"],
    precio: 95.90,
  },
  {
    id: "p005",
    nombre: "Bacon",
    descripcion: "Pizza crujiente con bacon y tomates cherry, un verdadero placer.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
    ingredientes: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    precio: 64.50,
  },
  {
    id: "p006",
    nombre: "Pollo Picante",
    descripcion: "Una mezcla de pimientos y pollo grillé, para los que buscan un poco de picante.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
    ingredientes: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    precio: 85.00,
  },
];

export default pizzas;