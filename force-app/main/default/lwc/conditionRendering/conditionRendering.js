import { LightningElement } from 'lwc';

export default class ConditionRendering extends LightningElement {
flag=true;
flag1=false;

display=false
    handleChange(event){
// event.target.checked returns TRUE if checkbox is checked
// event.target.checked returns FALSE if checkbox is NOT checked
        this.display=event.target.checked
    }

    flag =true;
    flag1 =false;

    display;

    handleChange(event){
    this.display = event.target.checked
    // event.target.chaecked return TRUE if checkbox is checked
    // event.target.chaecked return FALSE if checkbox is NOT checked
    }
    
    }
