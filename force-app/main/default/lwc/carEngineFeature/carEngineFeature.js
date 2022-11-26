
import {api, LightningElement } from 'lwc';


export default class CarEngineFeature extends LightningElement {


    @api
    horsePower ='990 hp';
@api
    fuelType='electric!';

    @api
    maxSpeed='120mph'
}