import React, { useState } from 'react';
import api from '../../util/api';

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

    const resetValues = () => {
        setName('');
        setCls('');
        setSocials('');
        setMessage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, cls, socials, message);
        api.post('/set_new_tipp', {
            name: name,
            cls: cls,
            prof_link: socials,
            msg: message
        })
            .then((response) => {
                console.log(response);
                resetValues();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="help-form" >
            <div className="form-group">
                <label htmlFor="name">Név</label>
                <input placeholder='Kérlek add meg a neved!' type="text" name="name" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="class">Osztály</label>
                <input placeholder='Kérlek add meg az osztályod!' type="text" name="class" id="class" value={cls} onChange={handleClassChange} />
            </div>
            <div className="form-group">
                <label htmlFor="socials">Insta/facebook profil linked</label>
                <input placeholder='Kérlek adj meg valamilyen elérhetőséget!' type="text" name="socials" id="socials" value={socials} onChange={handleSocialsChange} />
            </div>
            <div className="form-group">
                <label className='' htmlFor="message">Üzenet</label>
                <textarea placeholder='Kérlek kezdj el gépelni!' className='text' name="message" id="message" cols="30" rows="10" value={message} onChange={handleMessageChange}></textarea>
            </div>
            <button className='sub-button' type="submit" onClick={handleSubmit}>Küldés</button>
        </div >
    );
};

export default HelpForm;