import React from "react";
import styles from "./searchbox.module.css";
import SearchIcon from "../../assets/search-icon.svg?react";
import {useAutocomplete} from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../Helpers/helpers";
import { useNavigate } from "react-router-dom";
// // import { Tooltip } from "@mui/material";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value: selectedOption, // Rename 'value' for clarity
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.album.value; // Get the input value

    // Find the selected option's slug if an option was explicitly selected
    const slug = selectedOption?.slug;

    // Decide which value to use for navigation
    if (slug) {
      navigate(`/album/${slug}`);
    } else if (inputValue) {
      // Optionally handle navigation based on the typed input
      // This might involve searching your data or navigating with the typed value
      console.log("Navigating with typed input:", inputValue);
      // Example: navigate(`/search?query=${inputValue}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={onSubmit}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
                key={option.slug} // Add a key for proper rendering
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}

export default Search;