import React, { useState } from 'react';

const HelpForm = () => {

    //TODO: name
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        if (e.target.value.length > 30) {
            return;
        }
        setName(e.target.value);
    }

    //TODO: class
    const [cls, setCls] = useState('');
    const handleClassChange = (e) => {
        if (e.target.value.length > 5) {
            return;
        }
        setCls(e.target.value);
    }

    //TODO: socials
    const [socials, setSocials] = useState('');
    const handleSocialsChange = (e) => {
        if (e.target.value.length > 300) {
            return;
        }
        setSocials(e.target.value);
    }

    //TODO: message
    const [message, setMessage] = useState('');
    const handleMessageChange = (e) => {
        if (e.target.value.length > 1000) {
            return;
        }
        setMessage(e.target.value);
    }

    return (
        <div className="help-form" >
            <form method="Get" action="/alma">
                <div className="form-group">
                    <label htmlFor="name">Név</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="class">Osztály</label>
                    <input type="text" name="class" id="class" value={cls} onChange={handleClassChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="socials">Insta/facebook profil linked</label>
                    <input type="text" name="socials" id="socials" value={socials} onChange={handleSocialsChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Üzenet</label>
                    <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleMessageChange}></textarea>
                </div>
                <button type="submit">Küldés</button>
            </form>
        </div >
    );
};

export default HelpForm;