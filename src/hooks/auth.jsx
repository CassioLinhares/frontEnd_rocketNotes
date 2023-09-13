import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function authentication({ email, password }) { //signIn
        try {
            const response = await api.post("/sessions", { email, password });
            // console.log(response) // extract data
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); //parse user{} for text
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
            //setting the authorization header for all requests made with the api instance
            setData({ user, token });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not connect");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData(); //create a form.
                fileUploadForm.append("avatar", avatarFile); //insert a field with ("Name" - "file").

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }
            const { password, old_password, ...userData } = user;
            await api.put("/users", userData);

            localStorage.setItem("@rocketnotes:user", JSON.stringify(userData));
            setData({user: userData, token: data.token});
            alert("User updated successfully");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not update!");
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, []);


    return (
        <AuthContext.Provider value={
            {
                authentication,
                signOut,
                updateProfile,
                user: data.user
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}