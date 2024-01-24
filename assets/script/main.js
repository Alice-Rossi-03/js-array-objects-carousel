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

// let mainHtml = document.querySelector("main")

let topImgContainer = document.getElementById("top-img-container")
let bottomImgContainer = document.getElementById("bottom-container")

let leftArrow = document.getElementById("leftArrow")
let rightArrow = document.getElementById("rightArrow")

let currentSong = 0


for(let i = 0; i < songArray.length; i++){

    if(currentSong === 0){
        topImgContainer.innerHTML += `
        <figure>
            <img src="${songArray[i].img}" alt="${songArray[i].title}">
            <div class="description">
                <div class="bigger-text">${songArray[i].title}</div>
                <div class="smaller-text">${songArray[i].author}</div>
            </div>
        </figure>
    `
    } else {
        topImgContainer.innerHTML += `
        <figure class="d-none">
            <img src="${songArray[i].img}" alt="">
            <div class="description">
                <div class="bigger-text">${songArray[i].title}</div>
                <div class="smaller-text">${songArray[i].author}</div>
            </div>
        </figure>
    `
    }
}


for (let i = 0; i < songArray.length; i++){
    bottomImgContainer.innerHTML += `
        <figure>
            <img src="${songArray[i].img}" alt="${songArray[i].title}">
        </figure>
    `
}


leftArrow.addEventListener("click", function(){
    console.log("left-click")

    // for(let i = 0; i < songArray.length; i++){


    //     if(i === i){

    //         currentSong = songArray.length - 1

    //         topImgContainer.innerHTML += `
    //         <figure class="d-none">
    //             <img src="${songArray[i].img}" alt="">
    //             <div class="description">
    //                 <div class="bigger-text">${songArray[i].title}</div>
    //                 <div class="smaller-text">${songArray[i].author}</div>
    //             </div>
    //         </figure>
    //         `
    //     } else {

    //         currentSong = currentSong++

    //         topImgContainer.innerHTML += `
    //         <figure>
    //             <img src="${songArray[i++].img}" alt="">
    //             <div class="description">
    //                 <div class="bigger-text">${songArray[i++].title}</div>
    //                 <div class="smaller-text">${songArray[i++].author}</div>
    //             </div>
    //         </figure>
    //         `
    //     }

        
    // }

})

rightArrow.addEventListener("click", function(){
    console.log("right-click")

    // for(let i = songArray.length - 1; i >= 0 ; i--){
    //     // currentSong = currentSong--

    //     if(i === i){

    //         currentSong === 0
    //         topImgContainer.innerHTML += `
    //         <figure class="d-none">
    //             <img src="${songArray[i].img}" alt="">
    //             <div class="description">
    //                 <div class="bigger-text">${songArray[i].title}</div>
    //                 <div class="smaller-text">${songArray[i].author}</div>
    //             </div>
    //         </figure>
    //         `
    //     } else {

    //         currentSong = currentSong-- 

    //         topImgContainer.innerHTML += `
    //         <figure>
    //             <img src="${songArray[i--].img}" alt="">
    //             <div class="description">
    //                 <div class="bigger-text">${songArray[i--].title}</div>
    //                 <div class="smaller-text">${songArray[i--].author}</div>
    //             </div>
    //         </figure>
    //         `
    //     }
    // }
})

