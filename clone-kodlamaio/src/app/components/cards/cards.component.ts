import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  information:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(){
    this.information=[
      {
        header:"Yazılım Geliştirici Yetiştirme Kampı",
        content:"1.5 ay sürecek Yazlım Geliştirici Yetiştirme Kampımızın takip ve duyurularını..",
        link:"./assets/img/javascript.jpg"
      },
      {
        header:"Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)",
        content:"2 ay sürecek Yazlım Geliştirici Yetiştirme Kampımızın takip ve duyurularını..",
        link:"./assets/img/angular.jpg"
      },
      {
        header:"Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)",
        content:"2 ay sürecek Yazlım Geliştirici Yetiştirme Kampımızın takip ve duyurularını..",
        link:"./assets/img/java.jpg"
      },
      {
        header:"Programlamaya Giriş için Temel Kurs",
        content:"PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.",
        link:"./assets/img/programming.jpg"
      },
    ]
  }

}
