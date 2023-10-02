import React, { useEffect, useState } from "react";
import api from "../../util/api";


const GeneralProject = (data) => {

    console.log(data.data);


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState({});

    const abortController = new AbortController();

    const convertDate = (date_raw) => {
        let date = new Date(date_raw);
        let formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}`;
        return formattedDate;
    }

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
    else if (project.length === 0) {
        return <div>Nincs regisztrált adat</div>;
    }
    else {
        return (
            <div className="general_p_cont">
                <div className="general_p_name">{project.name}</div>
                <div className="general_p_date">{convertDate(project.created_at)}</div>
                <div className="general_p_disc">{project.description}</div>
            </div>
        )
    }
}

export default GeneralProject;