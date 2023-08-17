const searchForm= document.getElementById('search-form')
const searchInput= document.getElementById('search-input')
const moviesContainer = document.getElementById('movie-container')
const url='https://www.omdbapi.com/?apikey=26c15848'
let movieIDArr=[]
let movieDataArr=[]

searchForm.addEventListener('submit', async (e)  =>{
    e.preventDefault()
    
   const res = await fetch (`${url}&s=${searchInput.value}`, {method:'get'})
   const data = await res.json()
    movieIDArr=data.Search
    moviesContainer.innerHTML=''
             for(let movie of movieIDArr){
                   getMovieData(movie.imdbID)
             }
})
  
 function getMovieData (movieID){
    fetch (`${url}&i=${movieID}`)
    .then(res=> res.json())
    .then (data=> {
    resultsMovieData(data)
     })
}

function resultsMovieData(movie){
    
    moviesContainer.innerHTML += `
         <div id="moviesContainerBlock">
         <div>
            <img id="poster" src=${movie.Poster}>
            <h2 class="movieHeading"> ${movie.Title} 
            <span class= "movieRating"><i class="fa-regular fa-star"></i>${movie.imdbRating} </span>
            </h2>
            <h5 class= "addWatchList" id="addWatchList">
            <i class="fa-solid fa-plus"></i> Watchlist </h5>     
            <div>
            <h5 class="movieSubHeading"> ${movie.Runtime}</h5>
            <h5 class="movieSubHeading">${movie.Genre}</h5>
            </div>    
            <p class="moviePlot"> ${movie.Plot} </p>
            <hr />
          </div>
          
          </div>
        `
    }

