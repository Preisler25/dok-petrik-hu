import React, { useState, useEffect } from "react";
import axios from "axios";
import GeneralProject from "./generalProject";

const GeneralProjectList = () => {
    const [list, setList] = useState([1, 2]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();

    useEffect(() => {
        setLoading(true);
        setError(null);
        setList([]);

        const api = axios.create({
            baseURL: 'http://localhost:3002',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET'
            }
        })

        api
            .get("/get_projects")
            .then((response) => {
                console.log(response.data);
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
                {/*list.projects.map((project) => (
                    <GeneralProject key={project} project_id={project} />
                ))*/}
            </div>
        );
    }
}

export default GeneralProjectList;