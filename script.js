
// ************************ nav bar functionality *********************************************




// ************************ hero section functionality*****************************************
// ************************ content section-1 functionality ***********************************
const todayMovies = [
  {
      img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
      rating: "74°",
      title: "Wicked",
      release: "Nov 22, 2024"
  },
  {
      img: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
      rating: "78°",
      title: "Squid Game",
      release: "Sep 17, 2021"
  },
  {
    img: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
    rating: "72",
    title: "The Lion King",
    release: "Dec 20, 2024"
},
{
  img: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
  rating: "65°",
  title: "Nosferatu ",
  release: "Dec 25, 20"
},
{
  img: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
  rating: "68°",
  title: "Silo ",
  release: " May 04, 2023 "
},
{
  img: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/b/bb/DHS-_Storage_24_movie_poster.jpg/revision/latest?cb=20150618192455",
  rating: " 71° ",
  title: "Number 24",
  release: "Jan 01, 2025"
},
{
  img: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
  rating: "68°",
  title: "The Rig",
  release: "Jan 06, 2023"
},
{
  img: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
  rating: "65°",
  title: "Nosferatu",
  release: "Dec 25, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},


];
 
document.querySelectorAll('.tab6').forEach(tab6 => {
  tab6.addEventListener('click', () => {
    document.querySelectorAll('.tab6').forEach(t => t.classList.remove('active1'));
    tab6.classList.add('active1');
  });
});

const thisWeekMovies = [
  {
      img: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
      rating: "68°",
      title: "The Rig",
      release: "Jan 06, 2023"
  },
  {
      img: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
      rating: "65°",
      title: "Nosferatu",
      release: "Dec 25, 2024"
  },
  {
    img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
    rating: "74°",
    title: "Wicked",
    release: "Nov 22, 2024"
},
{
    img: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
    rating: "78°",
    title: "Squid Game",
    release: "Sep 17, 2021"
},
{
  img: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
  rating: "72",
  title: "The Lion King",
  release: "Dec 20, 2024"
},
{
img: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
rating: "65°",
title: "Nosferatu ",
release: "Dec 25, 20"
},
{
  img: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
  rating: "74°",
  title: "Wicked",
  release: "Nov 22, 2024"
},
{
  img: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
  rating: "78°",
  title: "Squid Game",
  release: "Sep 17, 2021"
},
{
img: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
rating: "72",
title: "The Lion King",
release: "Dec 20, 2024"
},


];

const tabs = document.querySelectorAll(".tab6" );
const trendingList = document.querySelector(".trending-list");


function displayMovies(movies) {
  trendingList.innerHTML = movies
      .map(movie => `
          <div class="movie">
              <img src="${movie.img}" alt="${movie.title}">
              <div class="rating-circle">
                  <span class="rating">${movie.rating}</span>
              </div>
              <p>${movie.title}</p>
              <p>${movie.release}</p>
          </div>
      `)
      .join("");
}

// Tab click event
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active1"));

      // Add active class to clicked tab
      tab.classList.add("active1");

      // Display movies based on clicked tab
      const tabType = tab.getAttribute("data-tab");
      if (tabType === "streaming1") {
          displayMovies(todayMovies);
      } else if (tabType === "on-tv1") {
          displayMovies(thisWeekMovies);
      }
  });
});

// Display "Today" movies by default
displayMovies( todayMovies);




// ----------------------------------------------------------------------------


// *********************** thick nav  hero bar functionality ******************************
document.querySelectorAll('.tab3').forEach(tab3 => {
  tab3.addEventListener('click', () => {
    document.querySelectorAll('.tab3').forEach(t => t.classList.remove('active'));
    tab3.classList.add('active');
  });
});



// *************************** content section-2 functionality  *******************************
document.querySelectorAll('.tab4').forEach(tab4 => {
  tab4.addEventListener('click', () => {
    document.querySelectorAll('.tab4').forEach(t => t.classList.remove('active4'));
    tab4.classList.add('active4');
  });
});


document.querySelectorAll('.tab5').forEach(tab5 => {
  tab5.addEventListener('click', () => {
    document.querySelectorAll('.tab5').forEach(t => t.classList.remove('active5'));
    tab5.classList.add('active5');
  });
});





// JavaScript to handle tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  // Select all tab buttons and add event listeners
  const tabs = document.querySelectorAll(".tab4");
  const trendingListContainer = document.querySelector(".trending-list-container4");

  // Dummy data for each tab (replace with API integration if needed)
  const moviesData = {
    streaming: [
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
    ],
    "on-tv": [
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
    ],
    "for-rent": [
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
    ],
    "in-theaters": [
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.58vW44-FIdbbxkcA9rkargHaLH&pid=Api&P=0&h=180",
        title: "Silo",
        rating: "78%",
        date: "May 04, 2023",
      },
      {
        image: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/b/bb/DHS-_Storage_24_movie_poster.jpg/revision/latest?cb=20150618192455",
        title: "Number 24",
        rating: "71°",
        date: "Jan 01, 2025",
      },
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.58vW44-FIdbbxkcA9rkargHaLH&pid=Api&P=0&h=180",
        title: "Silo",
        rating: "78%",
        date: "May 04, 2023",
      },
      {
        image: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/b/bb/DHS-_Storage_24_movie_poster.jpg/revision/latest?cb=20150618192455",
        title: "Number 24",
        rating: "71°",
        date: "Jan 01, 2025",
      },
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.58vW44-FIdbbxkcA9rkargHaLH&pid=Api&P=0&h=180",
        title: "Silo",
        rating: "78%",
        date: "May 04, 2023",
      },
      {
        image: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/b/bb/DHS-_Storage_24_movie_poster.jpg/revision/latest?cb=20150618192455",
        title: "Number 24",
        rating: "71°",
        date: "Jan 01, 2025",
      },
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.58vW44-FIdbbxkcA9rkargHaLH&pid=Api&P=0&h=180",
        title: "Silo",
        rating: "78%",
        date: "May 04, 2023",
      },
      {
        image: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/b/bb/DHS-_Storage_24_movie_poster.jpg/revision/latest?cb=20150618192455",
        title: "Number 24",
        rating: "71°",
        date: "Jan 01, 2025",
      },
    ],
  };

  // Function to populate movies based on the selected tab
  function populateMovies(tab) {
    // Clear the existing movie list
    const trendingList = document.querySelector(".trending-list4");
    trendingList.innerHTML = "";

    // Add movies for the selected tab
    const movies = moviesData[tab];
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie4");
      movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="rating-circle4">
          <span class="rating4">${movie.rating}</span>
        </div>
        <p>${movie.title}</p>
        <p>${movie.date}</p>
      `;
      trendingList.appendChild(movieElement);
    });
  }

  // Event listener for tab clicks
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active4"));
      // Add active class to the clicked tab
      this.classList.add("active4");

      // Populate movies based on the selected tab
      const selectedTab = this.getAttribute("data-tab");
      populateMovies(selectedTab);
    });
  });

  // Initialize with the "Streaming" tab
  populateMovies("streaming");
});










// // -------------- same containner  ------------------------



document.addEventListener("DOMContentLoaded", function () {
  // Select all tab buttons and the trending list container
  const tabs = document.querySelectorAll(".tab5");
  const trendingListContainer = document.querySelector(".trending-list5");

  // Data for Movies and TV
  const freeToWatchData = {
    movies: [
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },
      {
        image: "https://nientepopcorn.b-cdn.net/film-img/402431-locandina-big.jpg",
        title: "Wicked",
        rating: "74°",
        date: "Nov 22, 2024",
      },
      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      },

      {
        image: "https://m.media-amazon.com/images/I/7118ecsxO3L._AC_SL1200_.jpg",
        title: "Squid Game",
        rating: "78°",
        date: "Sep 17, 2021",
      },
      {
        image: "https://image.tmdb.org/t/p/original/hTnEisStzgp4HkLcm3B1twccrZr.jpg",
        title: "Vengeance Most Fowl",
        rating: "85°",
        date: "Dec 18, 2024",
      }
    ],
    tv: [
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL6531_1024x1024.jpg?v=1677340984",
        title: "The Rig",
        rating: "68°",
        date: "Jan 06, 2023",
      },
      {
        image: "https://image.tmdb.org/t/p/original/uEsjvExCBqBFnHrMbjVqsCNSioj.jpg",
        title: "Mufasa: The Lion King",
        rating: "72°",
        date: "Dec 20, 2024",
      },
      {
        image: "https://i.ebayimg.com/images/g/TiUAAOSwbIBncV~e/s-l1600.jpg",
        title: "Nosferatu",
        rating: "65°",
        date: "Dec 25, 2024",
      }
     
    ],
  };

  // Function to render content dynamically based on selected tab
  function populateFreeToWatch(tab) {
    // Clear previous content
    trendingListContainer.innerHTML = "";

    // Get the relevant data for the selected tab
    const selectedData = freeToWatchData[tab];
    selectedData.forEach((item) => {
      // Create the movie item
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie5");
      movieElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="rating-circle5">
          <span class="rating5">${item.rating}</span>
        </div>
        <p>${item.title}</p>
        <p>${item.date}</p>
      `;
      trendingListContainer.appendChild(movieElement);
    });
  }

  // Add event listeners to tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      tabs.forEach((t) => t.classList.remove("active5"));
      // Add active class to the clicked tab
      this.classList.add("active5");

      // Get the data-tab value (movies or tv)
      const selectedTab = this.getAttribute("data-tab") === "streaming" ? "movies" : "tv";

      // Populate content based on the selected tab
      populateFreeToWatch(selectedTab);
    });
  });

  // Initialize the page with "Movies" tab content
  populateFreeToWatch("movies");
});












// ********************************* her0-2 navbar functionality **********************************

// ******************************** leadership  functioanlity **************************************

// Example functionality to dynamically update leaderboard data
const leaderboardData = [
  { name: "Shei", avatar: "path-to-shei-avatar.jpg", allTime: 1473124, thisWeek: 12642 },
  { name: "mustafeez11", avatar: "path-to-avatar.jpg", allTime: 17453, thisWeek: 5549 },
  // Add more entries here
];

function populateLeaderboard(data) {
  const leaderboardList = document.querySelector('.leaderboard-list');
  leaderboardList.innerHTML = ''; // Clear existing entries

  data.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="profile">
        <img src="${entry.avatar}" alt="${entry.name} Avatar">
        <span class="name">${entry.name}</span>
      </div>
      <div class="progress">
        <div class="bar all-time" style="width: ${Math.min((entry.allTime / 1500000) * 100, 100)}%;"></div>
        <div class="bar this-week" style="width: ${Math.min((entry.thisWeek / 15000) * 100, 100)}%;"></div>
      </div>
      <div class="scores">
        <span class="all-time-score">${entry.allTime.toLocaleString()}</span>
        <span class="this-week-score">${entry.thisWeek.toLocaleString()}</span>
      </div>
    `;
    leaderboardList.appendChild(listItem);
  });
}

// Initialize leaderboard
populateLeaderboard(leaderboardData);


// ******************************* footer functionality *********************************************


// ------------------------- thick nav video  section containner -----------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Select all tab buttons and the videos section
  const tabs = document.querySelectorAll(".tab3");
  const videosSection = document.querySelector(".videos-section");

  // Data for the tabs
  const trailersData = {
    streaming: [
      {
        image: "https://via.placeholder.com/300x180.png?text=Mufasa+The+Lion+King",
        title: "Mufasa: The Lion King",
        description: "In Theaters Now",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Nightbitch",
        title: "Nightbitch",
        description: "The Concept of Motherhood",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Mufasa+The+Lion+King",
        title: "Mufasa: The Lion King",
        description: "In Theaters Now",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Nightbitch",
        title: "Nightbitch",
        description: "The Concept of Motherhood",
      }
     
    
    ],
    "on-tv": [
      {
        image: "https://via.placeholder.com/300x180.png?text=Sonic+The+Hedgehog+3",
        title: "Sonic the Hedgehog 3",
        description: "GAME ON!!!",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Babygirl",
        title: "Babygirl",
        description: "In UK and Irish cinemas January 10",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Sonic+The+Hedgehog+3",
        title: "Sonic the Hedgehog 3",
        description: "GAME ON!!!",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Babygirl",
        title: "Babygirl",
        description: "In UK and Irish cinemas January 10",
      }
     
    ],
    "for-rent": [
      {
        image: "https://via.placeholder.com/300x180.png?text=Mufasa+The+Lion+King",
        title: "Mufasa: The Lion King",
        description: "Rent on Prime Video",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Sonic+The+Hedgehog+3",
        title: "Sonic the Hedgehog 3",
        description: "Available to Rent Now",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Mufasa+The+Lion+King",
        title: "Mufasa: The Lion King",
        description: "Rent on Prime Video",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Sonic+The+Hedgehog+3",
        title: "Sonic the Hedgehog 3",
        description: "Available to Rent Now",
      }
     
      
    ],
    "in-theaters": [
      {
        image: "https://via.placeholder.com/300x180.png?text=Nightbitch",
        title: "Nightbitch",
        description: "Explore the Motherhood Concept",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Babygirl",
        title: "Babygirl",
        description: "Now in Cinemas",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Nightbitch",
        title: "Nightbitch",
        description: "Explore the Motherhood Concept",
      },
      {
        image: "https://via.placeholder.com/300x180.png?text=Babygirl",
        title: "Babygirl",
        description: "Now in Cinemas",
      }
     
     
    ],
  };

  // Function to render content dynamically based on the selected tab
  function populateTrailers(tab) {
    // Clear previous content
    videosSection.innerHTML = "";

    // Get the relevant data for the selected tab
    const selectedData = trailersData[tab];
    selectedData.forEach((item) => {
      // Create the video card element
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");
      videoCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="video-info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
      videosSection.appendChild(videoCard);
    });
  }

  // Add event listeners to tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add the active class to the clicked tab
      this.classList.add("active");

      // Get the data-tab value
      const selectedTab = this.getAttribute("data-tab");

      // Populate content based on the selected tab
      populateTrailers(selectedTab);
    });
  });

  // Initialize the page with "Streaming" tab content
  populateTrailers("streaming");
});
