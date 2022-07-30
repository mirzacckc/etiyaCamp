import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerList! : Customer[];

  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getList().subscribe((response) =>{
      this.customerList = response;
    })
  }

  deleteCustomer(val:number){
    if(confirm("Are you sure want to delete?")){
      this.customerService.delete(val).subscribe()
    }    
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

  selectedCustomerId(selectedCustomer: Customer):void{
    window.location.href = `dashboard/customer/${selectedCustomer.id}`
  }

}
