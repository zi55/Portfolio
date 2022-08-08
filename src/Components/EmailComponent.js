import { React, useState } from 'react';
import "../styles/EmailComponent.css";

function EmailComponent() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    };
    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError("Email is invalid!");
        } else if (isValidEmail(event.target.value) || event.target.value !='') {
            setError(null);
            setEmail(event.target.value);
        }
    };
    async function sendForm(e) {
        e.preventDefault();
        const form = document.querySelector('.form');
        let emailInput = document.querySelector('.email').value;
        let preloader = document.querySelector('.preloader');
        console.log(123);

        console.log(12);
        let user_email = email;
        let user_msg = document.querySelector(".message").value;
        let user_name = document.querySelector(".name").valu;
        let formData = new FormData(form);
        if (user_email && user_email!='' && user_msg !== '' && user_name !== '') {
            console.log(error);
            alert('отправка')
            // preloader.classList.add('show-preloader');
            let response = await fetch("sendMail.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                preloader.classList.remove('show-preloader')
            } else {
                alert("Ошибка")
            }
        } else {
            alert('заполните обязательные поля')
        }
    }
    return (
        <div className="form-wrapper">
            <form method='POST' className='form'>
                <div className='name-input input-block'>
                    <label for="name">Name</label>
                    <div className='name-input-wrapper'>
                        <input type="text" id="name" name="user-name" className="input name" required />
                    </div>
                </div>
                <div className='email-input input-block'>
                    <label for="email">Email</label>
                    <div className='email-input-wrapper'><span className={error ? 'email-error show-error' : 'email-error'}>{error}</span><input className='input email' name="user-email" type='email' id="email"
                        onChange={handleChange}
                        required
                    /></div>
                </div>
                <div className='message-input input-block'>
                    <label for="message">Message</label>
                    <textarea className='input message' name='user-message' id='message' placeholder='Input your message'
                        required
                    />
                </div>
                <input type="submit" value="Send"
                    id="sendEmailBtn"
                    onClick={(e) => sendForm(e)}
                />
            </form>
            <div className='preloader'>
                <div className='music'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
        </div>
    );
}

export default EmailComponent;