// // SearchBar.js
// import React from "react";
// import search_icon from "../assets/search.png";
// import "./Weather.css";

// const SearchBar = ({ inputRef, handleSearchClick, handleKeyPress }) => (
//   <div className="search-bar">
//     <input ref={inputRef} type="text" placeholder="Search" onKeyPress={handleKeyPress} />
//     <img src={search_icon} alt="Search" onClick={handleSearchClick} />
//   </div>
// );

// export default SearchBar;




import React from "react";
import PropTypes from "prop-types"; // PropTypes for validation
import { useForm } from "react-hook-form"; // Form validation library
import search_icon from "../assets/search.png";
// import "./SearchBar.css"; // Assuming SearchBar specific style
import './Weather.css'

const SearchBar = ({ onSearch }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = ({ city }) => {
    onSearch(city);
    reset(); // Clear input field after search
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("city", { required: "City name is required" })}
        // ref={inputRef}
        type="text"
        placeholder="Search city"
        className={errors.city ? "input-error" : ""}
      />
      <button type="submit" className="search-button">
        <img src={search_icon} alt="Search" />
      </button>
      {errors.city && <p className="error-message">{errors.city.message}</p>}
    </form>
  );
};

// PropTypes for better type safety and validation
SearchBar.propTypes = {
//   inputRef: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
