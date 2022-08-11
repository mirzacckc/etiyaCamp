import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], categoryId:number): Product[] {
    if(categoryId && categoryId >0)
      return value.filter(v => v.categoryId == categoryId);
    return value;
  }



  // transform(value: Product[], categoryId:number): Product[] {
  //   return value.filter(v =>{  //süsülü parantez bize ayrıca scope açtığı için 
  //     return v.categoryId == categoryId;  //süslü parantez olmadan tek satırda yazabiliriz
  //   });
  // }
}
