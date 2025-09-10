import { useState } from "react";

const ContactsSection = () => {
    const [yourName, setYourName] = useState("");
    const [yourMessage, setYourMessage] = useState("");

    const sendMsg = (e) => {
        e.preventDefault();

        const myNumber = "5596984029858";
        const text = `Olá! Me chamo ${yourName}, ${yourMessage}`;
        const msgFormat = encodeURIComponent(text);
        const url = `https://wa.me/${myNumber}?text=${msgFormat}`;

        window.open(url, "_blank");
    };

    return (
        <div>
            <section id="contacts" className="contacts">
                <h2 className="contacts-title">Entre em contato</h2>
                <form className="contacts-form" id="form-contacts" onSubmit={sendMsg}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            placeholder="Nome"
                            className="form-camp-contact"
                            id="name"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea
                            placeholder="Digite sua mensagem"
                            className="form-camp-contact"
                            rows="6"
                            id="message"
                            value={yourMessage}
                            onChange={(e) => setYourMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn-form">
                        Enviar Whatsapp
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactsSection;
