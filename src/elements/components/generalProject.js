import React, { useEffect, useState } from "react";
import api from "../../util/api";


const GeneralProject = (data) => {

    console.log(data.data);


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState({});

    const abortController = new AbortController();


    useEffect(() => {
        if (data.data != undefined) {
            api.get("/get_projects/" + data.data)
                .then((response) => {
                    setProject(response.data[0]);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
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
                <h1>General Project</h1>
                <h2>{project.name}</h2>
            </div>
        )
    }
}

export default GeneralProject;