import { useState } from "react";
import { api } from "../../services/api"; //handle requests - get | post | [...]
import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState(""); //[variable, function] | inside("value initial state")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        // console.log(name, email, password);
        if (!name || !email || !password) {
            return alert("Fill in all fields");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Successfully registered user");
            navigate("/");
        })
        .catch(error => {
           if (error.response) {
            alert(error.response.data.message)
           } else {
            alert("Could not register")
           }
        })
    }

    return(
        <Container>
            
            <Background />

            <Form>
                <h1>RocketNotes</h1>
                <p>Application for save and manager your useful links</p>

                <h2>Create your count</h2>

                <Input 
                    icon={FiUser} 
                    type="text" 
                    placeholder="Name" 
                    onChange={e => setName(e.target.value)} 
                />
                <Input 
                    icon={FiMail} 
                    type="text" 
                    placeholder="E-mail" 
                    onChange={e => setEmail(e.target.value)} 
                />
                <Input 
                    icon={FiLock} 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} 
                />

                <Button title="Login" onClick={handleSignUp} />

                <Link to="/"> Back to login </Link>
            </Form>

        </Container>
    );
}