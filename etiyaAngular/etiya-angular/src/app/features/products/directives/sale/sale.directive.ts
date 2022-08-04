import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective implements OnInit {
  //Attribute Directive
  //İlgili elemanın davranışını ve özellikleri ele alır.
  @Input() onSaleColor:string = 'red'
  @Input() onSaleText:string = 'On Sale!'
  @Input() isOnSale:boolean = true;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { 
  }

  ngOnInit(): void {
    if(!this.isOnSale) return;
    this.changeBackgroungColor('green');
    this.addSaleText();
  }

  @HostListener('mouseenter') onMouseEnter(){
    if(!this.isOnSale) return;
    this.changeBackgroungColor(this.onSaleColor);

  }

  @HostListener('mouseleave') onMouseLeave(){
    if(!this.isOnSale) return;
    this.changeBackgroungColor('green')

  }

  changeBackgroungColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  addSaleText(){
    const saletTextElement : HTMLElement = this.renderer.createElement('span');
    saletTextElement.innerText = this.onSaleText;
    //saleTextElement = <span>İndirim!!!<span>

    this.renderer.appendChild(this.elementRef.nativeElement,saletTextElement);
  }

}
