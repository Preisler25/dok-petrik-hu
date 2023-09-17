import React, { useState, useEffect } from "react";
import axios from "axios";
import GeneralProject from "./generalProject";

const GeneralProjectList = () => {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();

    useEffect(() => {
        setLoading(true);
        setError(null);
        setList([]);

        axios
        .get("https://api.example.com/projects")
        .then((response) => {
            setLoading(false);
            setList(response.data.projects);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });

        return () => abortController.abort();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Error: {error.message}</div>;
    }
    else {
        return (
            <div>
            {data.projects.map((project) => (
                <GeneralProject key={project} project_id={project}/>
            ))}
            </div>
        );
    }
}

export default GeneralProjectList;