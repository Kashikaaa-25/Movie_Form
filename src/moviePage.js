import React, { useState } from "react";
import "./moviePage.css";

const Movie = () => {
  const [movieData, setMovieData] = useState({
    movieName: "",
    director: "",
    producer: "",
    imageURL: "",
    releaseDate: "",
    cast: [],
    plot: "",
    rating: "",
    runTime: "",
    lang: "",
    genre: [],
    boc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCastChange = (index, field, value) => {
    const newCast = [...movieData.cast];
    newCast[index][field] = value;
    setMovieData((prevState) => ({
      ...prevState,
      cast: newCast,
    }));
  };

  const handleGenreChange = (index, e) => {
    const newGenre = [...movieData.genre];
    newGenre[index] = e.target.value;
    setMovieData((prevState) => ({
      ...prevState,
      genre: newGenre,
    }));
  };

  const handleAddCast = () => {
    setMovieData((prevState) => ({
      ...prevState,
      cast: [...prevState.cast, { starName: "", starImage: "", starRole: "" }],
    }));
  };

  const handleAddGenre = () => {
    setMovieData((prevState) => ({
      ...prevState,
      genre: [...prevState.genre, ""],
    }));
  };

  const handleRatingChange = (e) => {
    const selectedRating = e.target.value;
    setMovieData((prevState) => ({
      ...prevState,
      rating: selectedRating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieData);
    setMovieData({
      movieName: "",
      director: "",
      producer: "",
      imageURL: "",
      releaseDate: "",
      plot: "",
      rating: "",
      cast: [],
      runTime: "",
      lang: "",
      genre: [],
      boc: "",
    });
  };

  return (
    <div className="bg-image">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h3 className="py-4 text-warning text-center">Movie Form</h3>
          <form>
            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="movieName"
                  value={movieData.movieName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="movieLabel">Director</label>
                <input
                  className="form-control"
                  type="text"
                  name="director"
                  value={movieData.director}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Producer</label>
                <input
                  className="form-control"
                  type="text"
                  name="producer"
                  value={movieData.producer}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="movieLabel">Image URL</label>
                <input
                  className="form-control"
                  type="url"
                  name="imageURL"
                  value={movieData.imageURL}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Release Date</label>
                <input
                  className="form-control"
                  type="date"
                  min="1990-01-01"
                  max="2023-06-23"
                  name="releaseDate"
                  value={movieData.releaseDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6 p-3">
                <label className="movieLabel">Cast</label>
                {movieData.cast.map((castMember, index) => (
                  <div key={index}>
                    <label className="movieLabel">Star Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={castMember.starName}
                      onChange={(e) =>
                        handleCastChange(index, "starName", e.target.value)
                      }
                    />
                    <div>
                      <label className="movieLabel">Star Image URL</label>
                      <input
                        className="form-control"
                        type="text"
                        value={castMember.starImage}
                        onChange={(e) =>
                          handleCastChange(index, "starImage", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="movieLabel">Star Role</label>
                      <input
                        className="form-control"
                        type="text"
                        value={castMember.starRole}
                        onChange={(e) =>
                          handleCastChange(index, "starRole", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
                <br />
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={handleAddCast}
                >
                  Add Cast
                </button>
              </div>
            </div>


            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Plot Summary</label>
                <textarea
                  rows="3"
                  cols="3"
                  className="form-control"
                  name="plot"
                  value={movieData.plot}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="movieLabel">Genre</label>
                {movieData.genre.map((genreType, index) => (
                  <div key={index}>
                    <input
                      className="form-control"
                      type="text"
                      value={genreType}
                      onChange={(e) => handleGenreChange(index, e)}
                    />
                  </div>
                ))}
                <br />
                <button
                  className="btn btn-dark btn-gradient"
                  type="button"
                  onClick={handleAddGenre}
                >
                  Add Genre
                </button>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Rating</label>
                <select
                  className="form-control"
                  name="rating"
                  value={movieData.rating}
                  onChange={handleRatingChange}
                >
                  <option value="">Choose one</option>
                  <option value="PG">PG</option>
                  <option value="M">M</option>
                  <option value="E">E</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="movieLabel">Runtime</label>
                <input
                  className="form-control"
                  type="text"
                  name="runTime"
                  value={movieData.runTime}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="form-group row">
              <div className="col-sm-6">
                <label className="movieLabel">Language</label>
                <input
                  className="form-control"
                  type="text"
                  name="lang"
                  value={movieData.lang}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6">
                <label className="movieLabel">Box Office Collection</label>
                <input
                  className="form-control"
                  type="text"
                  name="boc"
                  value={movieData.boc}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <div className="col text-center m-4">
              <button
                className="btn btn-warning btn1"
                type="submit"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Movie;
