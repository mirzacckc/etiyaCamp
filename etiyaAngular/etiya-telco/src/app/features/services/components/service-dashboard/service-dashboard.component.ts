import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'etiya-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

  services!: Service[];
  fetchStatus!:string;
  skeletonSize:number =5;
  currentPage:number =0;

  constructor(private serviceService: ServicesService,private router:Router) { }

  ngOnInit() {
     this.getServicesList();
  }

  getServicesList(){
    this.fetchStatus = 'pending'
    setTimeout(() => {
      this.serviceService.getAll().subscribe((data =>{
        this.services = data
        this.fetchStatus = 'loaded'
      }),
      (error) =>{
        this.fetchStatus = 'error'
      })
    }, 1500);
  
  }

  deleteService(id:number){
    if(confirm("Are you sure want to delete?")){
      this.serviceService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getServicesList();
        }, 1000);
      })
    } 
  }

  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`service/${selectedService.id}`);
  }

  // first = 0;  //kendimiz fonksiyon yazmak istersek burası geçerli.

  //   rows = 5;

    

  //   next() {
  //     this.first = this.first + this.rows;
  // }

  // prev() {
  //     this.first = this.first - this.rows;
  // }

  // reset() {
  //     this.first = 0;
  // }

  // isLastPage(): boolean {
  //     return this.services ? this.first === (this.services.length - this.rows): true;
  // }

  // isFirstPage(): boolean {
  //     return this.services ? this.first === 0 : true;
  // }

}
