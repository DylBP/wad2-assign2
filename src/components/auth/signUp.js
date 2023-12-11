import React, { useState } from "react";
import { signUp } from "./auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(email, password);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const styles = {
    root: {
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "50%",
      "& > * ": {
        marginTop: 2,
      },
    },
    textField: {
      margin: "10px",
      width: "40ch",
    },
    submit: {
      marginTop: 2,
    },
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Sign Up
      </Typography>

      <form sx={styles.form} onSubmit={handleSubmit} noValidate>
        <TextField
          sx={styles.textField}
          type="email"
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          sx={styles.textField}
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={styles.submit}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
