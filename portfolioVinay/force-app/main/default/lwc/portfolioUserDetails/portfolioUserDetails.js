import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName
    @api resumeUrl
    downloadResume(){

        window.open(this.resumeUrl,"_blank")
    }
}

//"https://github.com/vinaykumarSalesforce/vinay-resume/raw/main/Vinay%20Kumar%20Resume.pdf"