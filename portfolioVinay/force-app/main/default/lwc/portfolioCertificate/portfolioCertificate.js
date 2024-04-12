import { LightningElement, api } from 'lwc';
import SAMPLE_IMAGE from '@salesforce/resourceUrl/sampleImage';
export default class PortfolioCertificate extends LightningElement {
    @api recordId
    @api objectApiName

    get imageUrl() {
        return SAMPLE_IMAGE;
    }
}