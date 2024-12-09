let pikachuName = "Pikachu"

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;

let player = {
  playerName: "Bjarne",
  playerImage: "/Images/pokemonTrainerIdle.png",
  playerPokemon: [],
}

let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon()
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.playerImage}">
            <div>${player.playerName}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemonView()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView(){
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemonView()">Vis dine pokemon</button>
          </div>
  </div>
  `;
}

function catchPokemon(){
  player.playerPokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemonView(){
  app.innerHTML = /*HTML*/ `
    <div id="showThemAll" class="allCaughtPokemonsContainer">
    <h1> Pokemon inventory: </h1>
    <ol id="listPokemon"> You caught: <br/></ol>
    </div>
     <div class="buttonContainer">  
     <button onclick="updateView()">Finn en annen</button>
          </div>
`;
let listOfPokemons = document.getElementById('listPokemon');
  for (let i= 0; i < player.playerPokemon.length; i++) {
    listOfPokemons.innerHTML += `<li> ${player.playerPokemon[i].name} , health: ${player.playerPokemon[i].health} <img src=${player.playerPokemon[i].image}></li>`;
  }
    return console.log(player.playerPokemon);
  
}

function getRandomPokemon(){
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
