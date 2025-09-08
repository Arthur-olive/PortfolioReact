const NavBar = () => {
    return (
        <div>
            <div class="balls"></div>
            <nav class="nav-bar">
                <ul class="menu-nav-bar">
                    <li>
                        <a href="#home" class="menu-link">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#projects" class="menu-link">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="menu-link">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#contacts" class="menu-link">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
