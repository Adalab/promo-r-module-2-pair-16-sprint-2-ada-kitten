'use strict';

//variables

//Datos de cada gatito
const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  'Ruiseño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace1 = 'British Shorthair';

const kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace2 = 'British Shorthair';

const kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace3 = 'British Shorthair';
//end Datos de cada gatito

//variable que usamos en un ejercicio pero que habrá que borrar porque no sirve de mucho
let html = '';

//Aquí guardábamos los elementos li de cada gatito pero ahora
//se sustituyen por la función renderKitten
/*
const kitten1 = `<li class="card">
 <article>
   <img
     class="card_img"
     src="${kittenImage1}"
     alt="gatito"
   />
   <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
   <h4 class="card_race">${html}</h4>
   <p class="card_description">
     ${kittenDesc1}
   </p>
 </article>
</li>`;

const kitten2 = `<li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;

const kitten3 = ` <li class="card">
<img
  class="card_img"
  src="${kittenImage3}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;
*/

//esta valiable la usábamos el texto del input de descripción del form de búsqueda
//aún está por ver si la seguimos necesitando o no
let descrSearchText;

//Elementos de HTML
//Formulario de añadir gatito
const newForm = document.querySelector('.js-new-form');

//Lista de gatos vacía que rellenaremos de gatos con JS
const catList = document.querySelector('.js-list');

//Botón + de mostrar y ocultar el form para añadir gatito
const plusIcon = document.querySelector('.item');
//Botón de añadir gatito
const addButton = document.querySelector('.js-btn-add');
//Botón de cancelar el form de añadir gatito
const cancelButton = document.querySelector('.js-btn-cancel');

//input de descripción en el form de añadir gatito
const inputDesc = document.querySelector('.js-input-desc');
//input de imagen en el form de añadir gatito
const inputPhoto = document.querySelector('.js-input-photo');
//input de nombre en el form de añadir gatito
const inputName = document.querySelector('.js-input-name');
//input de raza en el form de añadir gatito
const inputRace = document.querySelector('.js-input-race');
//label para mostrar error cuando no rellenan todos los campos
//en el form de añadir gatito
const labelMessageError = document.querySelector('.js-label-error');

//form de búsqueda
const searchForm = document.querySelector('.js-search-form');
//input de descripción en el form de búsqueda
const inputSearchDesc = document.querySelector('.js-input-search-desc');
//input de raza en el form de búsqueda
const inputSearchRace = document.querySelector('.js-input-search-race');
//label para mostrar error cuando no rellenan todos los campos
//en el form de búsqueda
const labelMessageSearchError = document.querySelector(
  '.js-label-search-error'
);
//botón de Buscar en el form de búsqueda
const searchButton = document.querySelector('.js-btn-search');
//end Elementos de HTML

//end variables

//funciones

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}
//no está definido url, no sabemos de donde coge los parametros
function renderKitten(kittenData) {
  console.log(kittenData);
  const newCat = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kittenData.image}"
      alt="gatito"
    />
    <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">
      ${kittenData.desc}
    </p>
  </article>
  </li>`;
  return newCat;
}

//end funciones

//operaciones

//Función añadir o eliminar una clase, dependiendo de si la tiene o no
/*plusIcon.addEventListener('click', (event) => {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
});*/

//Si meto la función en una variable...
const clickHandlePlus = () => {
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
};

//La puedo convertir en un argumento y hacer la función principal más sencilla:
plusIcon.addEventListener('click', clickHandlePlus);

//---------------------------------------------------------------------------
addButton.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  event.preventDefault();
  const newKittenDataObject ={ 
    desc: inputDesc.value,
    name: inputName.value,
    race: inputRace.value,
    photo: inputPhoto.value,
  };

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = 'Debe rellenar todos los valores.';
  } else {
    labelMessageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    kittenDataList.push(newKittenDataObject)
    renderKittenList(kittenDataList);
  }
}
//Crear un filtro por descripción para buscar gatitos que la contengan

const filterKitten = (event) => {
  event.preventDefault();
  const valueDesc = inputSearchDesc.value;
  const valueRace = inputSearchRace.value;

  if (valueDesc === '' || valueRace === '') {
    labelMessageSearchError.innerHTML = 'Debe rellenar todos los valores.';
  } else {
    labelMessageSearchError.innerHTML = '';
  }

  const descrSearchText = inputSearchDesc.value;
  catList.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    console.log(kittenItem);
    if (kittenItem.desc.includes(descrSearchText)) {
      catList.innerHTML += renderKitten(kittenItem);
    }
  }

  //Completa el código
  //Comprueba si cada gatito contiene la descripción
  //Si la contiene pintamos un gatito
  //utilizando la función renderKitten(kittenItem)

  /*if (kittenDesc1.includes(inputSearchDesc)) {
    catList.innerHTML =
      catList.innerHTML +
      renderKitten(kittenImage1, kittenDesc1, kittenName1, kittenRace1);
  }
  if (kittenDesc2.includes(inputSearchDesc)) {
    catList.innerHTML =
      catList.innerHTML +
      renderKitten(kittenImage2, kittenDesc2, kittenName2, kittenRace2);
  }
  if (kittenDesc3.includes(inputSearchDesc)) {
    catList.innerHTML =
      catList.innerHTML +
      renderKitten(kittenImage3, kittenDesc3, kittenName3, kittenRace3);
  }*/
};

//Ejercicio de condicionales. ¿Está vacío el campo?
searchButton.addEventListener('click', filterKitten);

if (kittenRace1 === '') {
  html = 'no se ha especificado raza';
} else {
  html = kittenRace1;
}

const cancelNewKitten = (event) => {
  event.preventDefault();
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
  labelMessageError.innerHTML = '';
  newForm.classList.add('collapsed');
};
// Hemos creado una nueva función que recoge la función cancelar gatito para dejar limpio el addEventListener
// De esta forma, la función manejadora (cancelButton) se sirve de la secundaria, cancelNewKitten cuando la necesite.
cancelButton.addEventListener('click', cancelNewKitten);

/*newForm.classList.remove('collapsed');*/

//Este código es para hacer la búsqueda por descripción.
//Habrá que meterlo luego en un eventListener del click del botón de búsqueda
/*inputSearchDesc.value = 'cariñoso';

descrSearchText = inputSearchDesc.value;

if (kittenDesc1.includes(descrSearchText)) {
  catList.innerHTML = catList.innerHTML + kitten1;
}

if (kittenDesc2.includes(descrSearchText)) {
  catList.innerHTML = catlist.innerHTML + kitten2;
}

if (kittenDesc3.includes(descrSearchText)) {
  catList.innerHTML = catList.innerHTML + kitten3;
}*/
//end búsqueda por descripción

//Pintar todos los gatitos cuando se carga la página

//end operaciones

//objetos

// Creamos objetos con los datos de los gatitos y creamos otro con los kittenData como parámetros

const kittenData_1 = {
  image: kittenImage1,
  name: kittenName1,
  desc: kittenDesc1,
  race: kittenRace1,
};

const kittenData_2 = {
  image: kittenImage2,
  name: kittenName2,
  desc: kittenDesc2,
  race: kittenRace2,
};

const kittenData_3 = {
  image: kittenImage3,
  name: kittenName3,
  desc: kittenDesc3,
  race: kittenRace3,
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];


//bucles

function renderKittenList(kittenDataList) {
  catList.innerHTML = '';
  for (const catElement of kittenDataList) {
    catList.innerHTML += renderKitten(catElement);
  }};
  renderKittenList(kittenDataList)
