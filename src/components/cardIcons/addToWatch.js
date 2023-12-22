import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToWatchlistIcon = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleAddToWatchlist = (e) => {
        e.preventDefault();
        context.addToWatchlist(movie.id);
    };

    return (
        <IconButton aria-label="add to watch" onClick={handleAddToWatchlist}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchlistIcon;