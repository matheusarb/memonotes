import { useState } from 'react';
import './styles.css';

export function Index() {
   let [ count, setState ] = useState(0)

    return (
        <div className="main-div">
            <span>
                <p>Click: </p>
            </span>
            <button onClick={() => setState(count += 1)}>
                Counter: {count}
            </button>
        </div>
    )

}