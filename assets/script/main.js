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
        <img src="${songArray[currentSong].img}" alt="${songArray[currentSong].title}">
        <div class="description">
            <div class="bigger-text">${songArray[currentSong].title}</div>
            <div class="smaller-text">${songArray[currentSong].author}</div>
        </div>
    </figure>
`

for (let i = 0; i < songArray.length; i++){
    bottomImgContainer.innerHTML += `
        <figure>
            <img src="${songArray[i].img}" alt="${songArray[i].title}">
        </figure>
    `
}


leftArrow.addEventListener("click", function(){
    console.log("right-click")

    if(currentSong === 0){
        currentSong = songArray.length - 1
        console.log(currentSong)

        

    } else {
        currentSong-- 
        console.log(currentSong)

        

    }
    
})



rightArrow.addEventListener("click", function(){
    console.log("left-click")

    if(currentSong === songArray.length - 1){
        currentSong = 0
        console.log(currentSong)

        

    } else {
        currentSong++
        console.log(currentSong)

        

    }

    

})


