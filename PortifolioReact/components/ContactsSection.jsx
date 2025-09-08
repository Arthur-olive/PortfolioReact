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

// const ContactsSection = () => {
//     const sendMsg = (e) => {
//         e.preventDefault();

//         const yourName = document.getElementById("name").value;
//         const yourMessage = document.getElementById("message").value;
//         const myNumber = "5596984029858";

//         const text = `Olá! Me chamo ${yourName}, ${yourMessage}`;
//         const msgFormat = encodeURIComponent(text);

//         const url = `https://wa.me/${myNumber}?text=${msgFormat}`;

//         window.open(url, "_blank");
//     };

//     return (
//         <div>
//             <section id="contacts" class="contacts">
//                 <h2 class="contacts-title">Entre em contato</h2>
//                 <form class="contacts-form" id="form-contacts" onsubmit={sendMsg}>
//                     <div class="form-group">
//                         <label for="name"></label>
//                         <input placeholder="Nome" class="form-camp-contact" id="name" />
//                     </div>
//                     <div class="form-group">
//                         <label for="message"></label>
//                         <textarea
//                             placeholder="Digite sua mensagem"
//                             class="form-camp-contact"
//                             rows="6"
//                             id="message"></textarea>
//                     </div>
//                     <button type="submit" class="btn-form">
//                         Enviar Whatsapp
//                     </button>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default ContactsSection;
