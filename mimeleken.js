const ord = ["Katt",
"Kanin",
"Slange",
"Løve",
"Kenguru",
"Hund",
"Sel",
"Bjørn",
"Fisk",
"Pingvin",
"Sykle",
"Hoppe tau",
"Spille fotball",
"Skiskyting",
"Stå på snowboard",
"Pusse tenner",
"Støvsuge",
"Kaste ball",
"Hoppe paradis",
"Baby",
"Brannmann",
"Frisør",
"Lærer",
"Politi",
"Konge",
"Banan",
"Kake",
"Is",
"Sitron",
"Suppe",
"Vondt i hodet",
"Forkjølet",
"Forelsket",
"Sulten",
"Kvalm",
"Edderkopp",
"Brennmanet",
"Maur",
"Mygg",
"Snegle",
"Sykepleier",
"Tyv",
"Ballettdanser",
"Kunstner",
"Journalist",
"Gå på skolen",
"Lage middag",
"Stå på vannski",
"Kjøre båt",
"Fly en drage",
"Bestemor",
"Fjellklatrer",
"Baker",
"Skuespiller",
"Drømme",
"Gravemaskin",
"Buss",
"Motorsykkel",
"Hest og slede",
"Heisekran",
"Telt",
"Hengekøye",
"Fiskestang",
"Gå på jakt",
"Redningsvest",
"Matpakke",
"Termos",
"Plukke blåbær",
"Tenne bål",
"Steke pannekaker",
"Blomst",
"Vulkan",
"Snøball",
"Regnvær",
"Storm",
"Løvenes konge",
"Harry Potter",
"Pippi Langstrømpe",
"Tannfeen",
"Elsa fra Frost",
"Mikke Mus",
"Supermann",
"Ole Brumm",
"Kaptein Sabeltann",
"Sirkusklovn",
"Julaften",
"Nyttårsaften",
"Bursdag",
"17. mai",
"Sommerferie",
"Julenissen",
"Snømann",
"Ridder",
"Sjørøver",
"Spøkelse",
"Tv",
"PlayStation",
"Monopol",
"Kortstokk",
"Yatzy"]

let gjett = document.querySelector("#gjett")
let start = document.querySelector("#start")
let pluss = document.querySelector("#pluss")
let minus = document.querySelector("#minus")
let poeng = document.querySelector("#poeng")
let reset = document.querySelector("#reset")
let scoreDiv = document.querySelector(".score")
let tidP = document.getElementById("tid")

let score = 0;
let timeleft = 5;



start.addEventListener("click", function(){
    pluss.classList.toggle("disabled")
    minus.classList.toggle("disabled")
    start.classList.toggle("disabled")
    reset.classList.toggle("disabled")
    poeng.classList.toggle("disabled")
    scoreDiv.classList.toggle("disabled")
    tidP.classList.toggle("disabled")

    score=0; 
    poeng.textContent= score + " poeng!"
    gjett.textContent= ord[Math.floor(Math.random() * ord.length)]


  

})



pluss.addEventListener("click", function(){
    score +=1;
    poeng.textContent= score + " poeng!"
    gjett.textContent= ord[Math.floor(Math.random() * ord.length)]

})
minus.addEventListener("click", function(){
    score-=1;
    poeng.textContent= score + " poeng!"
    gjett.textContent= ord[Math.floor(Math.random() * ord.length)]

})




let seconds = 1000 * 60; //1000 = 1 second in JS
let timer;
start.addEventListener("click", myFunction)
//When a key is pressed in the text area, update the timer using myFunction

function myFunction() {
   if(seconds == 60000)
     timer = setInterval(myFunction, 1000)
   seconds -= 1000;
   document.getElementById("tid").innerHTML = seconds/1000 + "  sekunder igjen!";
   if (seconds <= 0) {
       clearInterval(timer);
       document.getElementById("tid").innerHTML = "Ferdig! Du klarte " + score+ " poeng!";
       pluss.classList.toggle("disabled")
       minus.classList.toggle("disabled")

       poeng.classList.toggle("disabled")
       gjett.classList.toggle("disabled")
    }
} //If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute

