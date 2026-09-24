// Shared header & footer for every page.
// Usage: load this script in <head>, then put <site-header></site-header>
// and <site-footer></site-footer> in the page body.

const NAV_LINKS = [
    { href: "index.html", label: "About me" },
    { href: "cv.html", label: "CV" },
    { href: "research.html", label: "Research" },
    { href: "contact.html", label: "Contact" },
];

function currentPage() {
    let page = location.pathname.split("/").pop() || "index.html";
    if (!page.includes(".")) page += ".html";
    return page;
}

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const page = currentPage();
        const links = NAV_LINKS.map(({ href, label }) => {
            const active = href === page ? ' class="active"' : "";
            return `<li><a href="${href}"${active}>${label}</a></li>`;
        }).join("");

        this.innerHTML = `
            <header>
                <nav class="navbar">
                    <a class="logo" href="index.html">
                        <img src="assets/logo.svg" width="30" alt="" />
                        <p>Houssem-Eddine <span>KELLOU</span></p>
                    </a>
                    <ul class="nav-links">${links}</ul>
                </nav>
            </header>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; ${new Date().getFullYear()} Houssem-Eddine KELLOU · All rights reserved.</p>
            </footer>`;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
