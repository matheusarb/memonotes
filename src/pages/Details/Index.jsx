import { useState } from 'react';
import { Container } from './styles';

export function Index() {
   let [ count, setState ] = useState(0)

    return (
        <Container>
            <h1>Heelloo</h1>
        </Container>
    );
}