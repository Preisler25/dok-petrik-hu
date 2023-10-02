import api from "../../util/api";
import React, { useState, useEffect } from "react";

const GyulesComp = () => {
    const [gyules, setGyules] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();

    const convertDate = (date_raw) => {
        let date = new Date(date_raw);
        let formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        return formattedDate;
    }

    useEffect(() => {
        api.get("/next_gyules")
            .then((response) => {
                setGyules(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        return () => abortController.abort();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (gyules.length === 0) {
        return <div>Nincs jelenleg regisztrált gyülés</div>;
    }
    else {
        return (
            <div className="gyulesComp">
                <div className="gy_time">Időpont: {convertDate(gyules[0].gy_date)}</div>
                <div className="gy_hely">Helyszín: {gyules[0].gy_hely}</div>
                <div className="gy_txt">Miről lesz szó: {gyules[0].l_txt}</div>
            </div>

        );
    }
}

export default GyulesComp;