import { useState } from "react";
import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authentication } = useAuth();

    function handleAuthentication() {
        authentication({email, password});
    }

    return(
        <Container>
            
            <Form>
                <h1>RocketNotes</h1>
                <p>Application for save and manager your useful links</p>

                <h2>Login</h2>

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

                <Button title="Login" onClick={handleAuthentication} />

                <Link to="/register"> Create an account </Link>
            </Form>

            <Background />

        </Container>
        
    );
}