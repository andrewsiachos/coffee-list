import { Component, OnInit } from '@angular/core';
import { COFFEE_LIST } from './coffe-list';
import { Coffee } from './coffee.model';
import { CoffeeComponent } from "./coffee/coffee.component";

@Component({
  selector: 'app-main',
  imports: [CoffeeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{


  options = [
    {
      text: 'All Products',
      selected: true
    },
    {
      text: 'Available Now',
      selected: false
    }
  ];

  coffees: Coffee[] = COFFEE_LIST;
  tempCoffees = this.coffees;


  ngOnInit(): void {
    
  }

  onSelectOption(index: number, text:string){
    if(text == 'All Products'){
      this.tempCoffees = this.coffees;
    }else{
      this.tempCoffees = this.coffees.filter((x)=>{
        return x.available;
      })
    }
    for(let x of this.options){
      x.selected = false;
    }
    this.options[index].selected = true;
  }
}
