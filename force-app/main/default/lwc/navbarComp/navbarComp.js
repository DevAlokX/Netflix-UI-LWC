import { LightningElement } from 'lwc';
import netflixLogoResource from '@salesforce/resourceUrl/NetflixLogo';

export default class NavbarComp extends LightningElement {

    netflixLogo = `${netflixLogoResource}/image/logo.png`;
    userAvatar = `${netflixLogoResource}/image/avatar.jpeg`;

    connectedCallback() {
        window.addEventListener("scroll", this.handleScroll);
    }
    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const nav = this.template.querySelector(".nav");
        if (nav) {
            nav.classList.toggle("active", window.scrollY > 0);
        }
    };

}