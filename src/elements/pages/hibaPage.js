import HelpForm from "../components/helpForm";

const HibaPage = () => {
    return (
        <section className="helpPage">
            <div>
                <h1>Segitség kell?</h1>
                <div className="helpBejelentés">
                    <HelpForm />
                </div>
            </div>
        </section>
    );
};

export default HibaPage;