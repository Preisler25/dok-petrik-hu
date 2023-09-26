import React, { useState, useEffect } from "react";
import GeneralProject from "./generalProject";
import api from "../../util/api";

const GeneralProjectList = () => {
    const [list, setList] = useState([1, 2]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();

    useEffect(() => {
        setLoading(true);
        setError(null);
        setList([]);

        api
            .get("/get_projects")
            .then((response) => {
                setLoading(false);
                setList(response.data);
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
                {list.map((data, index) => (
                    <GeneralProject key={index} data={data.id} />
                ))}
            </div>
        );
    }
}

export default GeneralProjectList;