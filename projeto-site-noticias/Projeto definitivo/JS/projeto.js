

class MobileNavBar {
    constructor(menubutton, navList, navLinks, overlay) {
        this.menubutton = document.querySelector(menubutton);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.overlay = document.querySelector(overlay); // Adicionando o seletor do overlay
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleOverlayClick = this.handleOverlayClick.bind(this); // Método para lidar com o clique no overlay
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.overlay.classList.toggle("active"); // Adiciona ou remove a classe "active" do overlay
    }

    handleOverlayClick() {
        this.navList.classList.remove(this.activeClass);
        this.overlay.classList.remove("active"); // Remove a classe "active" do overlay quando clicado
    }

    addClickEvent() {
        this.menubutton.addEventListener("click", this.handleClick);
        this.overlay.addEventListener("click", this.handleOverlayClick); // Adiciona o evento de clique ao overlay
    }

    init() {
        if (this.menubutton) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".menu-button",
    ".nav-list",
    ".nav-list li",
    ".menu-overlay" // Adicione o seletor do overlay aqui
);

mobileNavBar.init();
 
function enviarDenuncia() {
    var textoDenuncia = document.querySelector('.textarea-container textarea').value.trim();

    if (textoDenuncia === "") {
        document.getElementById('resultado').innerText = 'Nenhuma denúncia registrada';
    } else {
        document.getElementById('resultado').innerText = 'Denúncia enviada com sucesso';
    }
}

document.querySelector('.textarea-container textarea').addEventListener('focus', function() {
    document.getElementById('resultado').innerText = '';
});
