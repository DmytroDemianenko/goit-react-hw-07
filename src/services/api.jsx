import axios from "axios";

axios.defaults.baseURL = "https://67268867302d03037e6dc6e9.mockapi.io/";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDA5NDg0OTAyYjBjOGEyM2Q3ZDBhMDA3MjFkODY0MyIsIm5iZiI6MTcyNzgxMDk1MC40NDM2NjQsInN1YiI6IjYxOTQxNTAzNDRlYTU0MDAyYmFjMTU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIOcdkSyA8JpDFZU0FffJtgkEbSwkMfLNn64ftxD7ig",
//   },
// };

export const fetchAll = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async (body) => {
  const { data } = await axios.post(`/contacts`, body);

  return data;
};

export const deleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};

// export const fetchSearchMovie = async (query) => {
//   const { data } = await axios.get(
//     `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
//     options
//   );
//   return data.results;
// };
