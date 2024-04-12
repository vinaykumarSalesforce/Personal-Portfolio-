import { LightningElement, api, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import userProfile from '@salesforce/resourceUrl/userProfile';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANYLOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMPANYNAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
export default class PortfolioBanner extends LightningElement {

    // Expose component properties as API properties to allow customization in the Lightning App Builder
    @api recordId //='a0w5g000001QsTGAA0';
    @api trailheadUrl //='https://www.salesforce.com/trailblazer/vinaykumarpbc87n40rqeo';
    @api linkedinUrl //= 'https://www.linkedin.com/in/vinay-kumar-gottala-70584a271'
    @api githubUrl //='https://github.com/vinaysalesforce';

    //define image URL using Salesforce Staic Resources 

    userMainPic = userProfile
    linkedin =`${PortfolioAssets}/linkedin-svgrepo-com.svg`
    github =`${PortfolioAssets}/icons8-github.svg`
    trailhead =`${PortfolioAssets}/trailhead-svgrepo-com.svg`
     
    // Wire service to fetch record data based on the provided recordId and specified fields
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANYLOCATION,COMPANYNAME,DESIGNATION]})
    portfolioData

    // Getter methods to retrieve specific field values from the fetched record data
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }

    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANYLOCATION)
    }

    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANYNAME)
    }

    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }


}