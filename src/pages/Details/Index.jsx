import { Container } from './styles';
import { Button } from '../../components/Button';

export function Details() {

    return (
        <Container>
            <h1>Heelloo</h1>
            <p>Matheus Ribeiro</p>

            <Button title="Login"/>
            <Button title="Sign up"/>
            <Button title="Go back"/>
        </Container>
    );
}