import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartSummaryService } from 'src/app/features/cart/services/cart-summary/cart-summary.service';
import Product from 'src/app/features/products/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  @Output() onBtnClick:any = new EventEmitter();
  isCard:boolean=true;
  onMouseColor:string = 'yellow'
  onSaleText:string = 'İndirim!!'
  constructor(private cartSummaryService:CartSummaryService) { }

  ngOnInit(): void {
  }

  addToCartEvent(){
    this.onBtnClick.emit(this.product);
    this.cartSummaryService.CartItems = {product:this.product,quantity:1}
  }

}
