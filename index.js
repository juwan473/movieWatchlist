const searchForm= document.getElementById('search-form')
const searchInput= document.getElementById('search-input')
const moviesContainer = document.getElementById('movie-container')
const url='https://www.omdbapi.com/?apikey=26c15848'
let movieIDArr=[]
let movieDataArr=[]
//let moviesFeed = ''

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
         <div >
            <img id="poster" src=${movie.Poster}>
         </div>
                
         <div>
            <h2 class="movieHeading"> ${movie.Title} 
            <span class= "movieRating">    ${movie.imdbRating} </span>
            </h2>
         </div>
                 
         <div >
            <h5 class="movieSubHeading"> ${movie.Runtime}</h5>
            <h5 class="movieSubHeading">${movie.Genre}</h5>
         </div>
         
          <div>
            <p> ${movie.Plot} </p>
          </div>
         <hr />
        `
    }

