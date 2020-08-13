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

        let result=document.querySelector(".result");
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
         
            result.appendChild(card);


        
   
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
         
            result3.appendChild(card);


        
   
 } 
 
})
