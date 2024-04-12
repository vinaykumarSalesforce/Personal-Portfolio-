import { LightningElement,api  } from 'lwc';
import trailheadimage from '@salesforce/resourceUrl/trailheadimage'
export default class PortfolioUserStats extends LightningElement {

    trailheadRankImg
    @api badges 
    @api points
    @api trails 
    @api rank

    renderedCallback(){
        if(this.rank){
            let url = `${trailheadimage}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadRankImg = url
        }
    }

}