import { LightningElement } from 'lwc';
import netflixLogoResource from '@salesforce/resourceUrl/NetflixLogo';

export default class NavbarComp extends LightningElement {

    netflixLogo = `${netflixLogoResource}/image/logo.png`;
    userAvatar = `${netflixLogoResource}/image/avatar.jpeg`;

}