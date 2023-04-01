// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray)  { // assigning movies array to function
    let mappedArr = moviesArray.map((eachElem) => { // creating mappedArr sorting through each element 
      return eachElem.director; // only returning director values
    })
    return mappedArr; // returning assigned variable in function
  }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { //assinging array to function
    let filteredArr = moviesArray.filter((eachElem) => { //created variable that filters through each element
      return eachElem.director === "Steven Spielberg" && eachElem.genre.includes("Drama");// returning director= S.S. and includes drama
    })
    return filteredArr.length; //returning variable in function 
  }

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { // assingning array to function
  if (moviesArray.length === 0) { //create condition that checks that the array is empty
    return 0; 
  }
  let scores = moviesArray.reduce((accumulation, eachElem) => { // create variable that combines the scores of each element
    if(eachElem.score === undefined) { //create a condition if there is no value returns sum of score
      return accumulation;
    } else { // create a condition that if there is a value to add the score to the sum.
          return eachElem.score + accumulation;
  }
  }, 0);
  let averageScore = scores / moviesArray.length; //create a new variable that takes the variable scores and divides it by the length of the array to provide the average
  return parseFloat(averageScore.toFixed(2)); //returns average scores to only 2 decimals 
}
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { //assign the array to a function
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama')); //create variable to filter through array and pull any genre that includes drama
  const averageDramaMovieScore = scoresAverage(dramaMovies); // create variable that uses already declared scoresAverage and applying function to dramaMovies
  return averageDramaMovieScore; //return average of Drama movies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {//assign array to function
  let arrayMovies = [...moviesArray]//make copy of array
  let movieByYear = arrayMovies.map((movie)=> {// create variable that goes through each object in the array
    return movie;
  })
  movieByYear.sort((movie1, movie2) => {// sort through the array from start to finish
    if(movie1.year > movie2.year){ //create condition if the year of movie1 is greater than movie 2 it returns 1 
       return 1
      }
       else if(movie1.year < movie2.year){ //create condition if the year of movie1 is less than movie2 returns -1
       return -1 
      } else if(movie1.title > movie2.title){ //create condition if the title of movie1 is greater than movie2 returns 1
     return 1 
    } else if(movie1.title < movie2.title){// create condition if the title of movie1 is less than movie2 returns -1
     return -1
    }
       })
       return movieByYear //return the movies ordered by year
        }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { //assign the array to a function
  let arrayMovies = [...moviesArray]//create copy of array
  let movieOrder = arrayMovies.map((movie)=>{ //create variable that goes through  each object in the array
      return movie.title// return only the title 
    })
    movieOrder.sort()//sort through new variable by title
    if(movieOrder.length > 20){ //create condition to check if the title is within the first 20 
      return movieOrder.slice(0, 20) // return titles 0-20 
    }
    return movieOrder// returns listed titles 0-20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {//assign array to a function
  let movieDuration = moviesArray.map((movie)=> {//create a variable that goes through each object in the array
    return movie.duration//return only duration
  })

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
