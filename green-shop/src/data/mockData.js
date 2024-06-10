export const productos = [
    {
      id: 1,
      nombre: "Mix Legumbres Premium 250gr",
      precio: 8500,
      categoria: "Legumbres",
      stock: 5,
      descripcion:
        "Legumbres totalmente naturales listas para consumir",
      img: "https://img.freepik.com/foto-gratis/diferentes-tipos-composicion-legumbres-secas-crudas-superficie-mesa-marmol_114579-73134.jpg?t=st=1718032304~exp=1718035904~hmac=edc980cb09972c588f4f35f7ce5f1facd1bd1bd71cb04f55c30357caa761ac6c&w=740",
    },
    {
      id: 2,
      nombre: "Almendras 1 kg",
      precio: 13000,
      categoria: "Frutos secos",
      stock: 5,
      descripcion:
        "Almendras de la mejor calidad, listas para consumir",
      img: "https://img.freepik.com/foto-gratis/vista-superior-almendras-marrones_140725-24348.jpg?t=st=1718032336~exp=1718035936~hmac=0be6a31b91a88ce34bc9560a5cd99d32457e4bc1818faf6e8ef428584c3c8034&w=740",
    },
    {
      id: 3,
      nombre: "Ciruelas secas 250gr",
      precio: 8900,
      categoria: "Frutos secos",
      stock: 5,
      descripcion:
        "Ciruelas secas de la mejor calidad, listas para consumir",
      img: "https://img.freepik.com/foto-gratis/ciruelas-negras-secas-taza-sobre-superficie-hormigon_114579-71087.jpg?t=st=1718032363~exp=1718035963~hmac=0f35ec3855c561db57b5b58566130267ab96dec6c900693f7133f086c3f8dcb0&w=1380",
    },
    {
      id: 4,
      nombre: "Pan Integral",
      precio: 9900,
      categoria: "Panificados",
      stock: 5,
      descripcion:
        "Pan integral de la mejor calidad, listo para consumir",
      img: "https://img.freepik.com/foto-gratis/close-up-rebanadas-pan-sobre-tabla-madera_23-2148438671.jpg?t=st=1718030560~exp=1718034160~hmac=90922e39854583b687bfc5648dc65ed446a9053411b8eec1536fc603d9bc58a3&w=740",
    },
    {
      id: 5,
      nombre: "Barras de cereal",
      precio: 14900,
      categoria: "Barras cereal",
      stock: 5,
      descripcion:
        "Barras de cereal de la mejor calidad, listas para consumir",
      img: "https://img.freepik.com/foto-gratis/snacks-avellanas-frutas-secas_23-2148582642.jpg?t=st=1718030663~exp=1718034263~hmac=09d1425f0df831025e2078c67f5164675b9143d5446866edf26631dff63af436&w=1380",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((res) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      setTimeout(() => {
        res(productosFiltrados);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((res) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      setTimeout(() => {
        res(productoFiltrado);
      }, 2000);
    });
  };