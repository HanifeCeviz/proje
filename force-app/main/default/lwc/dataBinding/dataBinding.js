import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
myName = 'Jane';

dynamicBinding='Test';
textValue = 'Test';

// created the property
country = "Enter a country name";

handleInput(event){
    // event holds the data that comes from input element
// event.target.value the user input value
// this is used to access the js properties
// We assign the user input value to dynamicBinding
this.dynamicBinding = event.target.value

}

// assign user input to country property
handleInputChange(event) {
    this.country = event.target.value;
}
  

}