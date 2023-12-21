import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="http://github.com/matheusarb.png"
                    alt="User image"
                />

                <div>
                    <span>Welcome</span>
                    <strong>Username</strong>
                </div>
            </Profile>
        </Container>        
    )
}