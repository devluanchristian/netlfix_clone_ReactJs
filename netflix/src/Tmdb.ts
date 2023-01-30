const API_KEY = "6c6a89e8282161c2eb9425182b5a86c4";
const API_BASE_URL = "https://api.themoviedb.org/3";

/**
 * - originais da netflix
 * - recomendados (trending)
 * - em alta (top rated)
 * - ação
 * - comédia
 * - terror
 * - romance
 * - documentários
 *
 */

const basicFetch = async (endpoint: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return await response.json();
  } catch (error) {
    console.log("Error basiFetch" + error);
  }
};

export interface IJsonAttribute{
  original_name:string;
  backdrop_path:string;
  vote_average:number;
}

type Attribute = {
  [results: string]: any;
  movieId: string | number;
};

export interface ICategory {
  slup?: string;
  title: string;
  items: Attribute;

}

export default {
  getHomeList: async (): Promise<ICategory[]> => {
    return [
      {
        slup: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=213`
        ),
      },
      {
        slup: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
        ),
      },
      {
        slup: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
        ),
      },
      {
        slup: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&language=pt-br&with_genres=28`
        ),
      },
      {
        slup: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&language=pt-br&with_genres=35`
        ),
      },
      {
        slup: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&language=pt-br&with_genres=27`
        ),
      },
      {
        slup: "romace",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&language=pt-br&with_genres=10749`
        ),
      },
      {
        slup: "documentary",
        title: " Documentários",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&language=pt-br&with_genres=99`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId: Attribute, type: any) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movies/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
      }
    }
    return info;
  },
};
