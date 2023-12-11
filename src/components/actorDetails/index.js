import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../headerMovieList";

const root = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5em",
};

const contentContainer = {
    marginTop: "1em",
    width: "100%",
    maxWidth: "600px",
};

const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {

    return (
        <>
            <Header title={`Actor Details for ${actor.name}`} />
            <div style={root}>
                <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt={`Profile of ${actor.name}`}
                    style={{ width: "300px", borderRadius: "50%" }}
                />

                <Paper variant="outlined" component="ul" sx={{ ...root, marginTop: "1em" }}>
                    <Chip icon={<PersonIcon />} label={`Known For Departments: ${actor.known_for_department}`} sx={{ ...chip }} color="primary" />
                    <Chip icon={<CakeIcon />} label={`Birthday: ${actor.birthday}`} sx={{ ...chip }} />
                    <Chip icon={<LocationOnIcon />} label={`Place of Birth: ${actor.place_of_birth}`} sx={{ ...chip }} />
                </Paper>

                <div style={contentContainer}>
                    <Typography variant="h5" component="h3">
                        {actor.name}
                    </Typography>

                    <Typography variant="body1" component="p">
                        {actor.biography}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default ActorDetails;
