const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

// my data for searching movies
const myMovies = [
  {
    title: "Naruto",
    img: "./../src/naruto.jpg",

    overview:
      "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
    
    vote_average: 8.3,
  },
  {
    title: "One Piece",
    img: "./../src/one_piece_p1.jpg",

    overview:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gol D Roger. The famous mystery treasure named 'One Piece'.",

    vote_average: 8.7,
  },
  {
    title: "Bleach",
    img: "./../src/bleach.jpg",
    overview:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",

    vote_average: 8.1,
  },

  {
    title: "Attack on Titan",
    img: "./../src/aot.png",

    overview:
      "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  
  {
    title: "Death Note",
    img: "./../src/Deathnote.jpg",
    overview:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    img: "./../src/Fullmetal Alchemist Brotherhood.jpg",
    overview:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
  },
  {
    title: "Hunter x Hunter",
    img: "./../src/hunterXhunter.jpg",
    overview:
      "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
  },

  { 
    title:"dragon ball z",
    img:"./../src/one_piece_p1.jpg",
    overview:"After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.",
  },
  {
    title: "demon slayer",
    img: "./../src/demon_p4.jpg",
    overview:
      "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  },
  {
    title:"baki hanma",
    img:"./../src/one_piece_p1.jpg",
    overview:"The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world.",
  },
  {
    title:"black clover",
    img:"./../src/one_piece_p1.jpg",
    overview:"Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
  },
  {
    title:"my hero academia",
    img:"./../src/one_piece_p1.jpg",
    overview:"Set in a world where superpowers (called Quirks) have become commonplace, the story follows Izuku Midoriya, a boy who was born without a Quirk but still dreams of becoming a superhero himself",
  },
  {
    title:"One punch man",
    img:"./../src/one_piece_p1.jpg",
    overview:"Saitama, the protagonist, is an exceptionally powerful hero who easily defeats the monsters or other villains with a single punch. However, due to his overwhelming strength, Saitama has become bored with his powers and is constantly trying to find stronger opponents who can fight him"

  },
  {
    title:"Tokyo revengers",
    img:"./../src/one_piece_p1.jpg",
    overview:"The story follows Takemichi Hanagaki, a 26-year-old temp worker with a gloomy life, who learns that his ex-girlfriend, Hinata Tachibana, has died in a dispute involving the Tokyo Manji Gang.",
  },
  {
    title:"Jujutsu kaisen",
    img:"./../src/one_piece_p1.jpg",
    overview:"The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.",

  },
  {
    title:"chainsaw man",
    img:"./../src/one_piece_p1.jpg",
    overview:"When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza. Pochita's chainsaw powers come in handy against these powerful demons."
  },
  {
    title:"lookism",
    img:"./../src/one_piece_p1.jpg",
    overview:"A miracle is about to happen to an unattractive loner guy.",

  },
  {
    title:"dr stone",
    img:"./../src/one_piece_p1.jpg",
    overview:"One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind, to kickstart civilization with the power of science!",
  },
  {
    title:"clannad",
    img:"./../src/one_piece_p1.jpg",
    overview: "The story follows the life of Tomoya Okazaki, from adolescence to adulthood. As an average high school student, he meets many people in his last year at school, including five girls, whose individual problems he helps resolve, and his life is further detailed after graduating from high school.",
  },
  {
    title:"yu yu hakusho: ghost files",
    img:"./../src/one_piece_p1.jpg",
    overview:"The story of Yu Yu Hakusho follows Yusuke Urameshi, a teenage delinquent who loses his life when he is hit by a car trying to save a child's life. After meeting the ruler of the Underworld, the Spirit World, Yusuke is given another chance to come back to life.",
  },
  // {
  //   title

  // }


];

// function for showing my movies
function showMyMoviess(aa) {

  main.innerHTML = "";
  const mostPopularMovies = document.createElement("div");
  const recommendedMovies = document.createElement("div");
  recommendedMovies.innerHTML = "<h2>Recommended for you</h2>";
  const horizontalList = document.createElement("div");

  mostPopularMovies.classList.add("most-popular");
  recommendedMovies.classList.add("recommended");
  horizontalList.classList.add("horizontal-list");

  mostPopularMovies.appendChild(horizontalList);
  
  main.appendChild(mostPopularMovies);
  main.appendChild(recommendedMovies);
  
  aa.forEach((movie, index) => {
    
    console.log(movie.img);


    const { title, img, vote_average, overview } = movie;
    const movieElement = document.createElement("div");

    if (index < 5) {
      movieElement.classList.add("movie-l");
      movieElement.innerHTML = ` 
            <img src="${img}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    } else {
      movieElement.classList.add("movie-s");
      movieElement.innerHTML = ` 
            <img src="${img}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    }

    if (index < 5) {
      horizontalList.appendChild(movieElement);
    } else {
      recommendedMovies.appendChild(movieElement);
    }
  });

}




async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (search.value && search.value !== "") {
    searchMovies(data.results);
  } else {
    // showRecommended(data.results);
    showMyMoviess(myMovies);
    // searchMovies(data.results);
  }

  // console.log(data.results);
}
// console.log(movies);
function showRecommended(movies) {
  main.innerHTML = "";
  const mostPopularMovies = document.createElement("div");
  const recommendedMovies = document.createElement("div");
  recommendedMovies.innerHTML = "<h2>Recommended for you</h2>";
  const horizontalList = document.createElement("div");

  mostPopularMovies.classList.add("most-popular");
  recommendedMovies.classList.add("recommended");
  horizontalList.classList.add("horizontal-list");

  mostPopularMovies.appendChild(horizontalList);
  
  main.appendChild(mostPopularMovies);
  main.appendChild(recommendedMovies);
  
  movies.forEach((movie, index) => {
    
    // console.log(movie);


    const { title, backdrop_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");

    if (index < 5) {
      movieElement.classList.add("movie-l");
      movieElement.innerHTML = ` 
            <img src="./naruto_p2.jpg" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    } else {
      movieElement.classList.add("movie-s");
      movieElement.innerHTML = ` 
            <img src="./../src/one_piece_p1.jpg" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    }

    if (index < 5) {
      horizontalList.appendChild(movieElement);
    } else {
      recommendedMovies.appendChild(movieElement);
    }
  });
}

function searchMovies(movies) {
  main.innerHTML = "";
  const searchedMovies = document.createElement("div");
  searchedMovies.classList.add("searched");
  main.appendChild(searchedMovies);

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-s");
    console.log(IMG_PATH + poster_path);
    movieElement.innerHTML = ` 
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview hidden">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
      
    searchedMovies.appendChild(movieElement);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
  } else {
    window.location.reload();
  }
});
