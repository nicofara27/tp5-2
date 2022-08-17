let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarInfo)

// Seleccionar el contenedor de todos los elementos que se agregaran
let contenedor = document.querySelector("#contenedor");

// Variables con la creacion de cada elemento
let articleNuevo = document.createElement("article");
let divNuevo = document.createElement("div");
let tituloNuevo = document.createElement("h2");
let listaNueva = document.createElement("ul");
let listaNueva2 = document.createElement("ul");
let itemLista1 = document.createElement("li");
let itemLista2 = document.createElement("li");
let itemLista3 = document.createElement("li");
let itemLista4 = document.createElement("li");
let itemLista5 = document.createElement("li");
let itemLista6 = document.createElement("li");

//Seleccionar los valores que poseen los inputs
let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let dni = document.getElementById("dni").value;
let sexo;
if (
  document.getElementById("sexo").value === "m" ||
  document.getElementById("sexo").value === "M"
) {
  sexo = "Masculino";
} else {
  sexo = "Femenino";
}
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let nacimiento = document.getElementById("nacimiento").value;

//Creacion de la clase Persona y el objeto persona1
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
}
let persona1 = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);

//Funcion para mostrar la informacion de la persona
function mostrarInfo(e) {
  e.preventDefault();

  let botonInfo = document.getElementById("botonInfo");

  //Comprobar si la funcion mostrara la informacion o la ocultara
  if (botonInfo.classList.contains("btn-color")) {
    //Modificar el boton para que aparezca el de ocultar
    botonInfo.classList.remove("btn-color");
    botonInfo.classList.add("btn-ocultar");
    botonInfo.innerHTML = "ocultar";

    //Creacion del elemento article que contiene todos los datos
    articleNuevo.className = "border border-4 p-2 mx-auto";
    articleNuevo.id = "contenedorDatos";
    contenedor.prepend(articleNuevo);

    let contendorDatos = document.getElementById("contenedorDatos");

    //Creacion del elemento titulo
    tituloNuevo.className = "text-center fs-1 mb-3 text-decoration-underline";
    tituloNuevo.innerHTML = persona1.nombre;
    contenedorDatos.prepend(tituloNuevo);

    //Creacion del elemento contenedor de las listas
    divNuevo.className = "d-flex justify-content-around fs-4";
    divNuevo.id = "contenedorListas";
    contendorDatos.appendChild(divNuevo);

    let contendorListas = document.getElementById("contenedorListas");

    //Creacion de la primera lista
    listaNueva.id = "lista1";
    contendorListas.prepend(listaNueva);

    let lista1 = document.getElementById("lista1");
    itemLista1.innerHTML = `Edad: ${persona1.edad}`;
    lista1.appendChild(itemLista1);
    itemLista2.innerHTML = `Dni: ${persona1.dni}`;
    lista1.appendChild(itemLista2);
    itemLista3.innerHTML = `Sexo: ${persona1.sexo}`;
    lista1.appendChild(itemLista3);

    //Creacion de la segunda lista
    listaNueva2.id = "lista2";
    contendorListas.appendChild(listaNueva2);

    let lista2 = document.getElementById("lista2");
    itemLista4.innerHTML = `Peso: ${persona1.peso} Kg`;
    lista2.appendChild(itemLista4);
    itemLista5.innerHTML = `Altura: ${persona1.altura} Cm`;
    lista2.appendChild(itemLista5);
    itemLista6.innerHTML = `Año de nacimiento: ${persona1.nacimiento}`;
    lista2.appendChild(itemLista6);

    //Modifica el boton para que aparezca el de mostrar informacion
  } else {
    botonInfo.innerHTML = "Mostrar informacion";
    botonInfo.classList.add("btn-color");
    botonInfo.classList.remove("btn-ocultar");

    contenedorDatos.remove();
  }
}

function esMayor() {
  console.log("hola")
  if(persona1.edad >= 18) {
    alert(`Usted tiene ${persona1.edad} años, es mayor de edad`);
  } else {
    alert(`Usted tiene ${persona1.edad} años, es menor de edad`);
  }
}

function mostrarGeneracion() {
  if (persona1.nacimiento <= 1948) {
    alert(
      `Usted pertenece a la generación Silent generation (Los niños de la posguerra) y su rasgo caracteristico es la austeridad`
    );
  } else if (persona1.nacimiento >= 1949 && persona1.nacimiento <= 1968) {
    alert(
      `Usted pertenece a la generación Baby Boom y su rasgo caracteristico es la ambición`
    );
  } else if (persona1.nacimiento >= 1969 && persona1.nacimiento <= 1980) {
    alert(
      `Usted pertenece a la  Generación X y su rasgo caracteristico es la obseción por el éxito`
    );
  } else if (persona1.nacimiento >= 1981 && persona1.nacimiento <= 1993) {
    alert(
      `Usted pertenece a la  Generación Y (Millennials) y su rasgo caracteristico es la frustación`
    );
  } else {
    alert(
      `Usted pertenece a la  Generación Z y su rasgo caracteristico es la irreverencia`
    );
  }
}

