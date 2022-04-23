import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private laptopservice:LaptopService) { }

  alllaptops=this.laptopservice.getcart();
  ngOnInit(): void {
  }

}
