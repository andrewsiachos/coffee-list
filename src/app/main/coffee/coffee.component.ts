import { Component, Input } from '@angular/core';
import { Coffee } from '../coffee.model';

@Component({
  selector: 'app-coffee',
  imports: [],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss'
})
export class CoffeeComponent {
  @Input() coffeeInput!: Coffee;
}
