const HelpForm = () => {

    //TODO: checking the texts

    return (
        <div className="help-form">
            <form method="Get" action="/alma">
                <div className="form-group">
                    <label htmlFor="name">Név</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="class">Osztály</label>
                    <input type="text" name="class" id="class" />
                </div>
                <div className="form-group">
                    <label htmlFor="socials">Insta/facebook profil linked</label>
                    <input type="text" name="socials" id="socials" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Üzenet</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Küldés</button>
            </form>
        </div>
    );
};

export default HelpForm;