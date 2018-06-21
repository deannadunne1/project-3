let memes = document.querySelectorAll(".meme");

function resetMemes() {
    memes.forEach(meme => {
        meme.classList.remove('active');
    });
}

memes.forEach(meme => {
  meme.addEventListener('click', e => {
    resetMemes();
    meme.classList.toggle('active');
    console.log("meme clicked");
  });
});


let userguess = document.querySelector("#guess");

let doge = document.querySelector("#meme1");
let badluckbrian = document.querySelector("#meme2");
let overlyattachedgirlfriend = document.querySelector("#meme3");
let slenderman = document.querySelector("#meme4");
let rickroll = document.querySelector("#meme5");
let scumbagsteve = document.querySelector("#meme6");

function memeGuess() {
    console.log(userguess.value)

    if (userguess.value == "doge" && doge.classList.contains('active')) {
       dogeMeme();
    }
    
     else if (userguess.value == "bad luck brian" && badluckbrian.classList.contains('active')) {
        badluckbrianMeme();
    }
    
    else if (userguess.value == "overly attached girlfriend" && overlyattachedgirlfriend.classList.contains('active')) {
       overlyattachedgirlfriendMeme();
    }
    
    else if (userguess.value == "slender man" && slenderman.classList.contains('active')) {
       slendermanMeme();
    }
    
    else if (userguess.value == "rickroll" && rickroll.classList.contains('active')) {
       rickrollMeme();
    }
    
    else if (userguess.value == "scumbag steve" && scumbagsteve.classList.contains('active')) {
       scumbagsteveMeme();
    }
    
    else {
      console.log("incorrect guess");
    }
}


async function dogeMeme() {
    let dogeFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=doge&limit=100&offset=0&rating=G&lang=en");
    console.log(dogeFetch);
    let dogeGif = await dogeFetch.json();
    console.log(dogeGif);
    let random = Math.floor(Math.random()*dogeGif.data.length)
    const dogeURL = dogeGif.data[random].images.original.url;
    console.log(dogeURL);
    doge.innerHTML = `<img src="${dogeURL}" length=240px>`;
}

async function badluckbrianMeme() {
    let badluckbrianFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=bad+luck+brian&limit=100&offset=0&rating=G&lang=en");
    console.log(badluckbrianFetch);
    let badluckbrianGif = await badluckbrianFetch.json();
    console.log(badluckbrianGif);
    let random = Math.floor(Math.random()*badluckbrianGif.data.length)
    const badluckbrianURL = badluckbrianGif.data[random].images.original.url;
    console.log(badluckbrianURL);
    badluckbrian.innerHTML = `<img src="${badluckbrianURL}" length=240px>`;
}

async function overlyattachedgirlfriendMeme() {
    let overlyattachedgirlfriendFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=overly+attached+girlfriend&limit=100&offset=0&rating=G&lang=en");
    console.log(overlyattachedgirlfriendFetch);
    let overlyattachedgirlfriendGif = await overlyattachedgirlfriendFetch.json();
    console.log(overlyattachedgirlfriendGif);
    let random = Math.floor(Math.random()*overlyattachedgirlfriendGif.data.length)
    const overlyattachedgirlfriendURL = overlyattachedgirlfriendGif.data[random].images.original.url;
    console.log(overlyattachedgirlfriendURL);
    overlyattachedgirlfriend.innerHTML = `<img src="${overlyattachedgirlfriendURL}" length=240px>`;
}

async function slendermanMeme() {
    let slendermanFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=slenderman&limit=100&offset=0&rating=G&lang=en");
    console.log(slendermanFetch);
    let slendermanGif = await slendermanFetch.json();
    console.log(slendermanGif);
    let random = Math.floor(Math.random()*slendermanGif.data.length)
    const slendermanURL = slendermanGif.data[random].images.original.url;
    console.log(slendermanURL);
    slenderman.innerHTML = `<img src="${slendermanURL}" length=240px>`;
}

async function rickrollMeme() {
    let rickrollFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=rickroll&limit=100&offset=0&rating=G&lang=en");
    console.log(rickrollFetch);
    let rickrollGif = await rickrollFetch.json();
    console.log(rickrollGif);
    let random = Math.floor(Math.random()*rickrollGif.data.length)
    const rickrollURL = rickrollGif.data[random].images.original.url;
    console.log(rickrollURL);
    rickroll.innerHTML = `<img src="${rickrollURL}" length=240px>`;
}

async function scumbagsteveMeme() {
    let scumbagsteveFetch = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Kl1tdqExC74kn15Es5iOKC7TT71TiOy4&q=scumbag+steve&limit=100&offset=0&rating=G&lang=en");
    console.log(scumbagsteveFetch);
    let scumbagsteveGif = await scumbagsteveFetch.json();
    console.log(scumbagsteveGif);
    let random = Math.floor(Math.random()*scumbagsteveGif.data.length)
    const scumbagsteveURL = scumbagsteveGif.data[random].images.original.url;
    console.log(scumbagsteveURL);
    scumbagsteve.innerHTML = `<img src="${scumbagsteveURL}" length=240px>`;
}