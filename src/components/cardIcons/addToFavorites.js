import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        context.addToFavourites(movie.id);
    };

    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToFavoritesIcon;