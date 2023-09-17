import axios from "axios";
import React, { useState } from "react";


const GeneralProject = (project_id) => {
    axios.get('api/getGP/?p_id=' + project.project_id).then((response) => {
        console.log(response);
        setProject(response.data);
    }).catch((error) => {
        console.log(error);
    });

    const [project, setProject] = useState({});

    return (
        <div>
            <h1>General Project</h1>
        </div>
    )
}

export default GeneralProject;