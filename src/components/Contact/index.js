import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const initialState= {
        name: '', 
        email: '', 
        message: '' 
    };

    const [formState, setFormState] = useState({...initialState});
    
    const [errorMessage, setErrorMessage] = useState('');
    const [sentMail, setSentMail] = useState('');

    const { name, email, message } = formState;

        
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) { 
            var data_js = {
                "access_token": "6cu8t8lrcliu0zrnpl0ut5wb",
                "subject": `Portfolio email from ${name}`,
                "text": `${message} /////----------------------------------/////Return email: ${email}`
            };
            function toParams(data_js) {
                var form_data = [];
                for ( var key in data_js ) {
                    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                }
        
                return form_data.join("&");
            }
            var request = new XMLHttpRequest();
            request.onreadystatechange = async function() {
                if (request.readyState == 4 && request.status == 200) {
                    await setFormState({...initialState} );
                    document.getElementsByName("name")[0].value = '';
                    document.getElementsByName("email")[0].value = '';
                    document.getElementsByName("message")[0].value = '';
                    setSentMail('sent');
                } else
                if(request.readyState == 4) {
                    setErrorMessage('Something went wrong. Please try to resend.')
                }
            };
            var params = toParams(data_js);
            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            console.log('params',params)
            request.send(params);
            return false;        
        }
    }

    function handleChange(e) {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('')
            } 
            } else {
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
            if(!errorMessage){
                setFormState({...formState, [e.target.name]: e.target.value })
                console.log('Handle Form', formState)
            }
    };
    return (
        <section className="contactPage d-flex flex-column align-items-center">
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {sentMail &&(
                <div> Email sent!</div>
                )}
                <button type="submit" name="submitBtn" className="btn">Submit</button>
            </form>
            <a href="mailto: mattersievers@gmail.com">Or send an email directly!</a>
        </section>
    )
}
export default Contact;