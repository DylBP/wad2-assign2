import React, { useState } from "react";
import { signIn } from "./auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = await signIn(email, password);
      console.log("User signed in: ", user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    root: {
      marginTop: 2,
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
        Sign In
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
          Sign In
        </Button>
      </form>
    </Box>
  );
}

export default SignInForm;