import { useNavigate } from "react-router-dom";
import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
        navigate(-1);
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />
                <div>
                    <span>Welcome,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout>
                <abbr title="Logout">
                    <RiShutDownLine onClick={handleSignOut} />
                </abbr>
            </Logout>

        </Container>
    );
};