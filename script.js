

const URL = "http://127.0.0.1:5500/week5.html"

function deleteMovie(id){
    fetch(URL+"/"+id,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"DELETE",
    }).then((response)=>response.json()).then((data)=>{
        
        fetchMovies();
    }).catch((err)=>{
        console.log("Error Deleting",err)
    })
}

function fetchMovies(){
    fetch(URL).then((response)=> response.json())
    .then((movies)=>{

        movies.forEach((movie)=>{
            let movieELem = document.createElement("div");
            movieELem.setAttribute("class","movie");
            let headingElem = document.createElement("h1");
            headingElem.innerText = movie.title;
            movieELem.appendChild(headingElem)
            let spanELem = document.createElement("span");
            spanELem.innerText = "Directed By : " + movie.director
            let btn = document.createElement("button");
            btn.setAttribute("class","deleteBtn")
            btn.innerText = "Delete"
            btn.addEventListener("click",()=>{
                deleteMovie(movie.id);
            })
            let updatebtn = document.createElement("button");
            updatebtn.setAttribute("class","updateBtn")
            updatebtn.innerText = "Update"
            movieELem.appendChild(spanELem)
            movieELem.appendChild(btn)
            movieELem.appendChild(updatebtn)
            document.getElementById("movieLists").appendChild(movieELem);
            
        
        })
        
        
    })

}

function updateMovie(id){

}

function addMovie(title,genre,director,release) {
    
   
    const data = {
        "title":title,
        "genre":genre,
        "director":director,
        "releaseYear":release
    }
    fetch(URL,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        console.log("data",data)
        fetchMovies();
    })
}


fetchMovies()


document.getElementById("movieForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const releaseYear = e.target.release.value;
    const director = e.target.director.value;

    addMovie(title,genre,director,releaseYear)

})