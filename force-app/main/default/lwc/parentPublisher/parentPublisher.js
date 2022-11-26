import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
export default class ParentPublisher extends LightningElement {
    // using @wire service to be able to use salesforce data in lwc
    @wire(CurrentPageReference) pageRef;
    
    // handleChange triggers when user starts typing in the input
    handleChange(event){
    // I want to fire the event, and send the data to the other component. 
    // I can do it using fireEvent function that is coming from pubsub.js file
        // fireEvent = (pageRef, eventName, payload)
        fireEvent(this.pageRef, "parentPublisher" , event.target.value );
    }
    
}