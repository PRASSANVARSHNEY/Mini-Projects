console.log("......APP STARTED");

function callAPI()
{
 fetch(url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49e2b109cc8342c39761d87b4de5f939")
 .then((res)=>{
    res.json().then((data)=>{
        renderUI(data);
    })
 })
 
}
//  callAPI();

function renderUI(data)
{   
    //got the articles from data
    const articles=data.articles;
    console.log(data);
    
    //single article from the article array
    for(let i=0;i<articles.length;i++)
    {
        const ar=articles[i];
        // console.log(ar);
        const div= document.createElement("div");
        div.setAttribute("class","news-card");
        const root = document.getElementById("root");
        //created parent div
        // const div = document.createElement("div");
        const h3= document.createElement("h3");
        const img=document.createElement("img")
        const p=document.createElement("p");
        const Readmore=document.createElement("a");
        p.innerText=ar.description;    
        img.src=ar.urlToImage;
        Readmore.href = ar.url;
        Readmore.innerText="Readmore";
        // img.style.height="300px";
        // img.style.width="400px";
        h3.innerText =ar.title;
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(Readmore);
        root.appendChild(div);
    }
    }

// renderUI();
callAPI();
