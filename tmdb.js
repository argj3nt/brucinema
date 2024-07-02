import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWY5NGU5YjIxNTA3Mjk0NTU0Y2Q5YTExMThiZTAyZiIsIm5iZiI6MTcxOTgyMzAzOC40OTI5OTksInN1YiI6IjY2MjIyZDdmMzJjYzJiMDE2MzBkNWQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5a4TNiqhQQX_65LDEvGD6kBZ1_JP5K08-clxHn09sY'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });