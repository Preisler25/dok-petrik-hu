import axios from "axios";
import React, { useEffect, useState } from "react";


const GeneralProject = (project_id) => {

    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get('api/getGP/?p_id=' + project.project_id).then((response) => {
            console.log(response);
            setProject(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <div>
            <h1>General Project</h1>
        </div>
    )
}

export default GeneralProject;