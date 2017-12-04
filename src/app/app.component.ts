import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app work';
  obj = {
    id : 1,
    name : 'Minh Luan'
  }

  arr = [ "Hao", "Khanh", "Vu"];
  istrue = true;
  myName = 'Minh Luan';
  day = new Date(2017,12,3);
  items =["Angular 4", "PHP", "JavaScript"];
arr_number = [3,5,1,12,0,11];
  newitems="";
  pushitems= function(){
    if(this.newitems!=""){
      this.items.push(this.newitems);
      this.newitems ="";
    }
  }
  removeitems = function(index){
      this.items.splice(index,1);
    }
  }
