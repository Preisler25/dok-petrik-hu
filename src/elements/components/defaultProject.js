import { useState } from 'react';

const DefaultProject = () => {
    const [def, setDef] = useState([]);

    const fetchDef = async () => {
        const res = await fetch('http://localhost:5000/api/projects/default');
        const data = await res.json();
        setDef(data);
    }
    return (
        <div className="default-project">
            <h1>Default Project</h1>
        </div>
    )
}