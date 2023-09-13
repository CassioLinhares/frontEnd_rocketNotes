import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl); // database file upload | show the file 
    const [avatarFile, setAvatarFile] = useState(null); //loading new file

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        const userUpdated = Object.assign(user, updated);

        await updateProfile( { user: userUpdated, avatarFile } );
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]; //can transfer multiple files
        setAvatarFile(file);

        const imgPreview = URL.createObjectURL(file); //temporary url for uploading the file
        setAvatar(imgPreview);
    }

    function handleBack() {
        navigate(-1);
      }

    return (
        <Container>
            <header>

                <button className="btnReturn" type="button" onClick={handleBack}>
                    <FiArrowLeft />
                </button>
               
            </header>

            <Avatar>
                <img src={avatar} alt={user.name} />

                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                </label>
            </Avatar>

            <Form>
                <Input
                    placeholder="Name"
                    type="text" icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text" icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password" icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="New password"
                    type="password" icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdate} />
            </Form>

        </Container>
    );
}