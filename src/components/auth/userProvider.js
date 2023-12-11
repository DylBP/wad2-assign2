import React, { useState, useEffect } from "react";
import UsersContext from "../../contexts/usersContext";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrUser(user);
            } else {
                setCurrUser(null);
                navigate("/auth");
            }
        });

        // Cleanup function
        return () => unsubscribe();
    }, [navigate]); // Include navigate in the dependency array

    return (
        <UsersContext.Provider value={{ currUser, setCurrUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UserProvider;
