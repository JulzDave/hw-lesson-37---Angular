import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hebDate'
})
export class HebDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var now = value
    var hebMonth;
    if(now.substr(3,2)=="01"){
       hebMonth = "ינואר" 
    }
    if(now.substr(3,2)=="02"){
      debugger;
       hebMonth = "פברואר" 
    }
    if(now.substr(3,2)=="03"){
       hebMonth = "מרץ" 
    }
    if(now.substr(3,2)=="04"){
       hebMonth = "אפריל" 
    }
    if(now.substr(3,2)=="05"){
       hebMonth = "מאי" 
    }
    if(now.substr(3,2)=="06"){
       hebMonth = "יוני" 
    }
    if(now.substr(3,2)=="07"){
       hebMonth = "יולי" 
    }
    if(now.substr(3,2)=="08"){
       hebMonth = "אוגוסט" 
    }
    if(now.substr(3,2)=="09"){
       hebMonth = "ספטמבר" 
    }
    if(now.substr(3,2)=="10"){
       hebMonth = "אוקטובר" 
    }
    if(now.substr(3,2)=="11"){
       hebMonth = "נובמבר" 
    }
    if(now.substr(3,2)=="12"){
       hebMonth = "דצמבר" 
    }
    debugger;
    
    return  now.substr(6)+" "+" ה-"+now.substr(0,2)+" ל"+hebMonth;
  }

}
