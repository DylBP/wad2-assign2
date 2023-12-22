import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../contexts/authContext";

const RemoveFromWatchlistIcon = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleRemoveFromWatchlist = (e) => {
        e.preventDefault();
        context.removeFromWatchlist(movie.id);
    };
    return (
        <IconButton
            aria-label="remove from watchlist"
            onClick={handleRemoveFromWatchlist}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default RemoveFromWatchlistIcon;