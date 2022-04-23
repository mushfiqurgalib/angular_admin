import { Injectable } from '@angular/core';
import { laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})


export class LaptopService {
  
  cartLaptop: laptop[]=[];
  addTocart(laptops: laptop) {
    if(laptops.addedcart){
      laptops.addedcart = false;
      this.cartLaptop=this.cartLaptop.filter(laptop => laptop.name!=laptops.name);
    }
    else{
      laptops.addedcart = true;
      this.cartLaptop.push(laptops);
    }
  }

  laptopToView=new laptop();
  setViewLaptop(givenlaptop: laptop) {
    this.laptopToView = givenlaptop;
  }

  getViewLaptop(): laptop{
    return JSON.parse(JSON.stringify(this.laptopToView));
  }
  addlaptop(newlaptop: laptop) {
    let id = Math.floor((Math.random() * 100000) + 1);
    newlaptop.id = id;
    this.laptops.push(newlaptop);
  
  }
  laptops: laptop[] = [
    {id: 1, name: "AVITA Essential 14", ram: "4GB LPDDR4 RAM", ssd:"256GB  SSD",price:"$29100",display:"14 FHD (1920 x 1080) IPS Display",imag:"..\\..\\assets\\avita14.jpg",addedcart:false},
    {id: 2, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",display:"14.1 Inch(1920 x 1080) IPS Anti-Glare Display",imag:"..\\..\\assets\\chuwi.jpg",addedcart:false},
    {id: 3, name: "HP 15s-du1115TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 HDD",price:"$33200",display:"15.6 HD (1366 x 768) Display",imag:"..\\..\\assets\\Hp15s.jpg",addedcart:false},
    {id: 4, name: "HP 15s-du1114TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 HDD",price:"$33200",display:"15.6 HD (1366 x 768) Display",imag:"..\\..\\assets\\Hpdu14.jpg",addedcart:false},
    {id: 5, name: "Dell Inspiron 15", ram: "4GB DDR4 RAM", ssd:"1TB HDD",price:"$45500",display:"15.6 FHD(1920x1080) Display",imag:"..\\..\\assets\\dellins.jpg",addedcart:false},
    {id: 6, name: "Lenovo ThinkPad E14 ", ram: "4GB DDR4 RAM", ssd:"512GB SSD",price:"$66000",display:"14 FHD (1920 x 1080) IPS Display",imag:"..\\..\\assets\\thinkpad.jpg",addedcart:false},
    {id: 7, name: "Asus Vivobook X515MA ", ram: " 4GB DDR4 RAM", ssd:"1TB 5400RPM HDD",price:"$35500",display:"14 FHD (1920 x 1080) IPS Display",imag:"..\\..\\assets\\vivobook.jpg",addedcart:false},
    {id: 8, name: "Lenovo IdeaPad Slim 3i ", ram: "4GB DDR4 RAM", ssd:"256GB SSD",price:"$35800",display:"15.6″ HD (1366×768)",imag:"..\\..\\assets\\ideapad.jpg",addedcart:false},
    {id: 9, name: "Lenovo IdeaPad Slim 3i ", ram: " 4GB DDR4 RAM", ssd:"1TB HDD",price:"$34800",display:"15.6″ HD (1366×768)",imag:"..\\..\\assets\\ideapadslim.jpg",addedcart:false},
  ];
  constructor() {
   
   }
   getlaptops(): laptop[] {
    return this.laptops;
}

deleteLaptop(givenlaptop: laptop): laptop[] {
  this.laptops = this.laptops.filter(laptop => laptop.id != givenlaptop.id);
  return this.laptops;
}
getcart(): laptop[]{
  return this.cartLaptop;
}

}