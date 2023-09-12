const MainPage = () => {
    return (
        <section className="mainAboutPage">
            <div>
                <h1>A Petrik DÖK</h1>
            </div>
            <div className="mainAboutList">
                <div className="mainAboutItem">
                    <h2>Mi a feladatunk?</h2>
                    <div>
                        <span className="dokJobListTitle">
                            A diák önkormányzatnak feladata:
                        </span>
                        <ul className="dokJobList">
                            <li>Diákok érdekképviselete és érdekvédelme</li>
                            <li>Diákok problémáira megoldást keresni</li>
                            <li>Iskola közöség építő programok szervezése</li>
                        </ul>
                    </div>
                </div>
                <div className="mainAboutItem">
                    <h2>Segitség kell?</h2>
                    <p></p>
                </div>
                <div className="mainAboutItem">
                    <h2>Következő gyülés</h2>
                    <p></p>
                </div>
                <div className="mainAboutItem">
                    <h2>Szeretnél csatlakozni?</h2>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default MainPage;