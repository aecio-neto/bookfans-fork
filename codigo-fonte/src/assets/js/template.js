class BookfansTemplate extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadow.innerHTML += `
            <link rel="stylesheet" href="${this.getAttribute("css")}" />
        `;

        fetch(this.getAttribute("src"))
            .then((body) => body.text())
            .then((text) => {
                this.shadow.innerHTML += text;
                this.setTitle(this.getAttribute("page-title"));
                this.setRightSidebar(!this.hasAttribute("hide-right-sidebar"));
                this.setHeader(!this.hasAttribute("hide-header"));
                this.setBacklink(this.hasAttribute("backlink") ? this.getAttribute("backlink") : "../paginaFeed/index.html");

                if (localStorage.eu === undefined) {
                    window.location = "../home/index.html";
                }
                const eu = JSON.parse(localStorage.eu);
                if (eu !== null && eu.nome !== undefined) {
                    this.setUsername(eu.nome);
                }

                this.shadow.querySelector(".exit-button").addEventListener("click", (event) => {
                    localStorage.removeItem("eu");
                    window.location = "../home/index.html";
                });

                const pesquisar = this.shadow.querySelector("#pesquisar");
                pesquisar.addEventListener("keydown", function (event) {
                    if (event.keyCode == 13) {
                        window.location = "../paginaPesquisa/index.html?q=" + encodeURIComponent(this.value);
                    }
                });
                this.shadow.querySelector("#pesquisar-botao").addEventListener("click", function (event) {
                    window.location = "../paginaPesquisa/index.html?q=" + encodeURIComponent(pesquisar.value);
                });
            });
    }

    setTitle(title) {
        for (const element of this.shadow.querySelectorAll(".nome-pagina")) {
            element.textContent = title;
        }
    }

    setRightSidebar(value) {
        this.shadow.querySelector(".right-sidebar").style.visibility = value ? "visible" : "hidden";
        this.shadow.querySelector(".content-area").style.minWidth =
            value
                ? "calc(100% - var(--padding-left) - var(--padding-right))"
                : "calc(100% - var(--padding-left)";
    }

    setHeader(value) {
        if (!value) {
            this.shadow.querySelector(".content-header").remove()
        }
    }

    setBacklink(link) {
        this.shadow.getElementById("back")?.setAttribute("href", link);
    }

    setUsername(username) {
        this.shadow.getElementById("user-name").textContent = username;
    }
}

window.customElements.define("bookfans-template", BookfansTemplate);