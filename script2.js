let searched = document.querySelector("#searched"); //Search Button
let input = document.querySelector("#input"); //Form element taking name of movie
// let poster = document.querySelector("#poster"); //for the images from API
let result = document.querySelector(".result");


searched.addEventListener("click", () => (result.textContent = "")); // clearing earlier fetched images when new movie searched
let i;
searched.addEventListener("click", async function (event) {
  result.classList.add("display");
  event.preventDefault();
  let title = input.value;
  if (!title) {
    // $("#myModal").modal(options);
    $("#myModal").modal("show");
    // alert("Enter Something");
    result.classList.remove("display");
    return;
  }
  let res = await fetch(` http://www.omdbapi.com/?s=${title}&apikey=697e6742`);
  console.log(res);
  let data = await res.json();
  console.log(data);
  if (data.Error) {
    $("#noResults").modal("show");
    result.classList.remove("display");
    return;
  }
  for (let i = 0; i < 7; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("Row");
        card.classList.add("card-size");
        card.classList.add("bg-dark");
        card.classList.add("text-white");
    // card.classList.add("card-" + i);
    // let imgDiv = document.createElement("div");
    // imgDiv.classList.add("card");
    card.classList.add("card-size");
        card.classList.add("bg-dark");
        card.classList.add("text-white");
    // card.appendChild();
    let img = document.createElement("img");
    img.setAttribute("src", data.Search[i]["Poster"]);
    card.appendChild(img);
    
    let titleDiv = document.createElement("div");
    
    // titleDiv.classList.add("card-title");
    titleDiv.classList.add("overlay");
    card.appendChild(titleDiv);
    let movieName = document.createElement("h5");
    movieName.classList.add('text');
    movieName.textContent = data.Search[i]["Title"];
    // let releaseYear = document.createElement("h3");
    // releaseYear.textContent = data.Search[i]["Year"];
    titleDiv.appendChild(movieName);
    // titleDiv.appendChild(releaseYear);
    // card.appendChild(titleDiv);
    result.appendChild(card);
    // card.addEventListener("click", () => {
      //   let imdbId = data.Search[i]["imdbID"];
      //   let link = `http://www.omdbapi.com/?i=${imdbId}&apikey=e10b009d`;
    //   let link = `http://www.omdbapi.com/?t=${data.Search[i].Title}&apikey=e10b009d&plot=full&`;
    //   window.open("./info.html" + "?link=" + link);
    //   console.log(link); // link print for check
    // });
  }
  
});




fetch('https://www.omdbapi.com/?i=tt3896198&apikey=697e6742&s=action')
 .then(function(success){ return success.json(); } )
 .then(function(movies)
 { console.log(movies) ;
    let array = movies.Search;
    for(i=0;i<7;i++)
    {
        let poster =array[i].Poster;
        console.log(poster);
        let title =array[i].Title;
        console.log(title);
        let type =array[i].Type;
        console.log(type);
        let year =array[i].Year;
        console.log(year);

        let result1=document.querySelector(".result1");
        // let col=document.createElement('div');
        // col.classList.add("Row");

        let card= document.createElement('div');
        card.classList.add("card");
        card.classList.add("Row");
        card.classList.add("card-size");
        card.classList.add("bg-dark");
        card.classList.add("text-white");
        // col.appendChild(card);
        let img=document.createElement('img');
            img.classList.add("card-img");
            img.classList.add("poster");
            img.setAttribute("src", poster);
            card.appendChild(img);

        let carddiv1=document.createElement('div');
            carddiv1.classList.add('overlay');
            card.appendChild(carddiv1);

        let cardtitle=document.createElement("h5");
            cardtitle.classList.add("text");
            cardtitle.textContent=title;
            carddiv1.appendChild(cardtitle);

        // let cardp=document.createElement('p');
        //     cardp.classList.add('card-text');
        //     cardp.textContent=year;
        //     carddiv1.appendChild(cardp);
         
            result1.appendChild(card);


        
   
 } 
 
})
fetch('https://www.omdbapi.com/?i=tt3896198&apikey=697e6742&s=drama')
 .then(function(success){ return success.json(); } )
 .then(function(movies)
 { console.log(movies) ;
    let array = movies.Search;
    for(i=0;i<7;i++)
    {
        let poster =array[i].Poster;
        console.log(poster);
        let title =array[i].Title;
        console.log(title);
        let type =array[i].Type;
        console.log(type);
        let year =array[i].Year;
        console.log(year);

        let result2=document.querySelector(".result2");
        // let col=document.createElement('div');
        // col.classList.add("Row");

        let card= document.createElement('div');
        card.classList.add("card");
        card.classList.add("Row");
        card.classList.add("card-size");
        card.classList.add("bg-dark");
        card.classList.add("text-white");
        // col.appendChild(card);
        let img=document.createElement('img');
            img.classList.add("card-img");
            img.classList.add("poster");
            img.setAttribute("src", poster);
            card.appendChild(img);

        let carddiv1=document.createElement('div');
            carddiv1.classList.add('overlay');
            card.appendChild(carddiv1);

        let cardtitle=document.createElement("h5");
            cardtitle.classList.add("text");
            cardtitle.textContent=title;
            carddiv1.appendChild(cardtitle);

        // let cardp=document.createElement('p');
        //     cardp.classList.add('card-text');
        //     cardp.textContent=year;
        //     carddiv1.appendChild(cardp);
         
            result2.appendChild(card);


        
   
 } 
 
})

fetch('https://www.omdbapi.com/?i=tt3896198&apikey=697e6742&s=kid')
 .then(function(success){ return success.json(); } )
 .then(function(movies)
 { console.log(movies) ;
    let array = movies.Search;
    for(i=0;i<7;i++)
    {
        let poster =array[i].Poster;
        console.log(poster);
        let title =array[i].Title;
        console.log(title);
        let type =array[i].Type;
        console.log(type);
        let year =array[i].Year;
        console.log(year);

        let result3=document.querySelector(".result3");
        // let col=document.createElement('div');
        // col.classList.add("Row");

        let card= document.createElement('div');
        // card.classList.add("card");
        // card.classList.add("Row");
        card.classList.add("card-size");
        card.classList.add("bg-dark");
        card.classList.add("text-white");
        // col.appendChild(card);
        let img=document.createElement('img');
            img.classList.add("card-img");
            img.classList.add("poster");
            img.setAttribute("src", poster);
            card.appendChild(img);

        let carddiv1=document.createElement('div');
            carddiv1.classList.add('overlay');
            card.appendChild(carddiv1);

        let cardtitle=document.createElement("h5");
            cardtitle.classList.add("text");
            cardtitle.textContent=title;
            carddiv1.appendChild(cardtitle);

        // let cardp=document.createElement('p');
        //     cardp.classList.add('card-text');
        //     cardp.textContent=year;
        //     carddiv1.appendChild(cardp);
         
            result3.appendChild(card);


        
   
 } 
 
})
