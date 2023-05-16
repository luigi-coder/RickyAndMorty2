import { getCharacter } from "./services/getData.js";

const container = document.querySelector('#character');
const loader = document.querySelector('#lds-ring');
const getID = localStorage.getItem('charID');
console.log(getID);

/* 
const loadCharacter = async (id) => {
    loader.style.display = 'grid';
    const data = await getCharacter(id);
    loader.style.display = 'none';

    const article = document.createElement('article');
    article.setAttribute('class', 'character');
    article.innerHTML = `
        <img src="${data.image}" alt="">
        <h2>${data.name}</h2>
        <p class='data'><span>Origen:</span>${data.origin.name}</p>
        <p class='data'><span>Locación Actual:</span>${data.location.name}</p>
        <div>
            <p class='data'><span>Especie:</span>${data.species}</p>
            <p class="${data.status.toLowerCase()}"></p>
        </div>
        `
    container.appendChild(article);
}

loadCharacter(getID); */



const loadCharacter = async (id) => {
    loader.style.display = 'grid';
    const data = await getCharacter(id);
    loader.style.display = 'none';

    const article = document.createElement('article');
    article.setAttribute('class', 'character');
    article.innerHTML = `
        <img src="${data.image}" alt="">
        <h2>${data.name}</h2>
        <p class='data'><span>Origen:</span>${data.origin.name}</p>
        <p class='data'><span>Locación Actual:</span>${data.location.name}</p>
        <div>
            <p class='data'><span>Especie:</span>${data.species}</p>
            <p class="${data.status.toLowerCase()}"></p>
        </div>
        `;
    container.appendChild(article);
};

// Obtén el ID del personaje de la URL
const id = location.hash.slice(2); // Omitir el primer carácter "/#"
loadCharacter(id);

