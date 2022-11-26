import { LightningElement } from 'lwc';
export default class Setter extends LightningElement {
    name='dog'
    age=2
    newAge=0;
    updateAge(event){
//      assigning user input to a js property
        this.newAge = event.target.value;
    }
    updateOriginalAge(){
        // When click on button, then original age will be updated
        this.age1 = this.newAge;
    }
    get age1(){

        return  parseInt(this.age) + 1
    }
    set age1(value){
        this.age=value
      if(value<0){
        alert('please enter a valid age.Age cannot be less than 0')
        console .log('invalid age in setter age1');
      } else{
        this.age=value
      } 

    } 
}
