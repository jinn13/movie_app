import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movie">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt="name" />
//     </div>
//   );
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://cwcontent.asiae.co.kr/asiaresize/215/2021051109385329569_1620693534.jpg",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://canalcity.s3-ap-northeast-1.amazonaws.com/uploads/760x400/shop_image_0_550_100.jpg?1656637304",
//     rating: 4.7,
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
//     rating: 3.8,
//   },
// ];

// // const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;

// function App() {
//   return (
//     <div>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number,
// };

// constructor(props) {
//   super(props);
//   console.log("hello");
// }

// state = {
//   count: 0,
// };

// add = () => {
//   this.setState((current) => ({ count: current.count + 1 }));
// };

// minus = () => {
//   this.setState((current) => ({ count: current.count - 1 }));
// };

// componentDidMount() {
//   console.log("component rendered");
// }

// componentDidUpdate() {
//   console.log("I just updated");
// }

// componentWillUnmount() {
//   console.log("Goodbye, cruel world");
// }

// render() {
//   console.log("I'm rendering");
//   return (
//     <div>
//       <h1>The number is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   );
// }
