const ProjectsSection = () => {
    return (
        <div>
            <section id="projects" class="projects">
                <h2 class="projects-title">Meus Projetos</h2>
                <div class="projects-box">
                    <div class="projects-card">
                        <img
                            class="projects-img"
                            src="img/APPLE.png"
                            alt="Projeto clone da Apple Store"
                        />
                        <div class="projects-text-box">
                            <h3 class="projects-info">Apple Store</h3>
                            <p class="projects-p">
                                Clone da Apple Store, feito com objetivo de aplicar funcionalidades
                                do JavaScript
                            </p>
                        </div>
                    </div>
                    <div class="projects-card">
                        <img
                            class="projects-img"
                            src="img/TABUADA.png"
                            alt="Projeto de um tabuada"
                        />
                        <div class="projects-text-box">
                            <h3 class="projects-info">Tabuada</h3>
                            <p class="projects-p">
                                Projeto de uma tabuada utilizando apenas JavaScript puro, HTML e CSS
                            </p>
                        </div>
                    </div>
                    <div class="projects-card">
                        <img
                            class="projects-img"
                            src="img/QRCODE.png"
                            alt="Projeto gerador de QR Code"
                        />
                        <div class="projects-text-box">
                            <h3 class="projects-info">QR Code generator</h3>
                            <p class="projects-p">
                                Projeto feito utilizando HTML, CSS, JavaScript e uma API de QR Code
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsSection;
