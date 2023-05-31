'use strict';

const movieurl = './assets/script/movies.json'; 
const citiesurl = './assets/script/cities.json';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
};

const searchInput = document.querySelector('.movie');
const reminder = document.querySelector('.reminder');

searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value.toLowerCase();

    if (inputValue.length < 2) {
        reminder.innerHTML = '';
        return;
      }

    fetch(movieurl, options)
      .then(response => response.json())
      .then(data => {
        const movieResults = data.results;
  
        const matchingMovies = movieResults.filter(movie => movie.title.toLowerCase().includes(inputValue));
  
        if (matchingMovies.length > 0) {
          reminder.innerHTML = '';
          matchingMovies.forEach(movie => {
            const span = document.createElement('span');
            span.textContent = movie.title;
            span.addEventListener('click', () => {
                searchInput.value = span.textContent;
                reminder.innerHTML = '';
            });
            reminder.appendChild(span);
          });
        } else {
          reminder.innerHTML = 'Movie not found';
        }
      })
      .catch(error => console.log(error));
  });

  const cityInput = document.querySelector('.city');
  const reminderCity = document.querySelector('.reminderCity');
  cityInput.addEventListener('input', () => {
    const inputValue = cityInput.value.toLowerCase();

    if (inputValue.length < 2) {
        reminderCity.innerHTML = '';
        return;
      }

    fetch(citiesurl, options)
      .then(response => response.json())
      .then(data => {
        const cityResults = data.cities;
  
        const matchingcities = cityResults.filter(city => city.name.toLowerCase().includes(inputValue));
  
        if (matchingcities.length > 0) {
            reminderCity.innerHTML = '';
            matchingcities.forEach(city => {
            const span = document.createElement('span');
            span.textContent = city.name;
            span.addEventListener('click', () => {
                cityInput.value = span.textContent;
                reminderCity.innerHTML = '';
            });
            reminderCity.appendChild(span);
          });
        } else {
            reminderCity.innerHTML = 'City not found';
        }
      })
      .catch(error => console.log(error));
  });

const showmovies = document.querySelector('.showmovies');
async function getMovies() {
    try {
        const  result = await fetch(movieurl, options);
        const data = await result.json();
        const movies = data.results;

        for(let i = 0; i < 12; i++ ) {
            const div = document.createElement('div');
            showmovies.appendChild(div);
            div.innerHTML = `<div class="photo"><img src=${movies[i].img}></div>
            <div class="moviename">${movies[i].title}</div>`
        }
        console.log(movies);
    } catch(error) {
        console.log(error);
    }
    
}
getMovies();