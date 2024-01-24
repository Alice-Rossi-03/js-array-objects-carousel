// CONSEGNA -> Creazione di un carosello 

// Dato un array di oggetti letterali con:
    // - url dell’immagine
    // - titolo
    // - descrizione


// Primo Step -> Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Secondo Step -> Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Terzo Step -> Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


// Creazione Array Oggetti 
let songArray = [
    {
        img: "./assets/img/bring-me-the-horizon.jpg",
        title: "Can You Feel My Heart?", 
        author: "By: Bring Me The Horizon"
    },
    {
        img: "./assets/img/the-dresden-dolls.jpg",
        title: "My Alcoholic Friends", 
        author: "By: The Dresden Dolls"
    },
    {
        img: "./assets/img/the-neighbourhood.jpeg",
        title: "Softcore", 
        author: "By: The Neighbourhood"
    },
    {
        img: "./assets/img/mother-mother.jpg",
        title: "Hayloft II", 
        author: "By: Mother Mother"
    },
    {
        img: "./assets/img/my-chemical-romance.jpg",
        title: "Teenagers", 
        author: "By: My Chemical Romance"
    },
]

let topImgContainer = document.getElementById("top-img-container")  // prendo la variabile dell'immagine grande 
let bottomImgContainer = document.getElementById("bottom-container")  // prendo la variabile delle immagini sottostanti 

let leftArrow = document.getElementById("leftArrow")  // freccia sinistra 
let rightArrow = document.getElementById("rightArrow")  // freccia destra 

let currentSong = 0  // variabile dell'immagine corrente 

// inseriamo i tag nell'html  
topImgContainer.innerHTML += `  
    <figure>
        <img id="current-img" src="${songArray[currentSong].img}" alt="${songArray[currentSong].title}">
        <div class="description">
            <div id="div-one" class="bigger-text">${songArray[currentSong].title}</div>
            <div id="div-two" class="smaller-text">${songArray[currentSong].author}</div>
        </div>
    </figure>
`

let imgHtml = document.getElementById("current-img") // prendo l'immagine da modificare 
let divOneHtml = document.getElementById("div-one") // prendo il primo div da modificare 
let divTwoHtml = document.getElementById("div-two") // prendo il secondo div da modificare 

for (let i = 0; i < songArray.length; i++){ // ciclo for per generare i "thumbs" sotto 
    bottomImgContainer.innerHTML += `
        <figure>
            <img src="${songArray[i].img}" alt="${songArray[i].title}">
        </figure>
    `
}

leftArrow.addEventListener("click", function(){ // evento al click della freccia di sinistra 
    console.log("left-click")

    if(currentSong === 0){  
        currentSong = songArray.length - 1
        console.log(currentSong) // verifica 

        imgHtml.src = songArray[currentSong].img  // sovrascriviamo la vecchia immagine 
        divOneHtml.innerHTML = songArray[currentSong].title  // sovrascriviamo il vecchio div 
        divTwoHtml.innerHTML = songArray[currentSong].author // sovrascriviamo il vecchio div 
        
    } else {  
        currentSong-- 
        console.log(currentSong) // verifica 

        imgHtml.src = songArray[currentSong].img  // sovrascriviamo la vecchia immagine
        divOneHtml.innerHTML = songArray[currentSong].title  // sovrascriviamo il vecchio div
        divTwoHtml.innerHTML = songArray[currentSong].author // sovrascriviamo il vecchio div
    }
    
})

rightArrow.addEventListener("click", function(){ // evento al click della freccia di destra  
    console.log("right-click")

    if(currentSong === songArray.length - 1){
        currentSong = 0
        console.log(currentSong) // verifica 

        imgHtml.src = songArray[currentSong].img  // sovrascriviamo la vecchia immagine
        divOneHtml.innerHTML = songArray[currentSong].title  // sovrascriviamo il vecchio div
        divTwoHtml.innerHTML = songArray[currentSong].author // sovrascriviamo il vecchio div

    } else {
        currentSong++
        console.log(currentSong) // verifica 

        imgHtml.src = songArray[currentSong].img  // sovrascriviamo la vecchia immagine
        divOneHtml.innerHTML = songArray[currentSong].title  // sovrascriviamo il vecchio div
        divTwoHtml.innerHTML = songArray[currentSong].author // sovrascriviamo il vecchio div

    }

})
