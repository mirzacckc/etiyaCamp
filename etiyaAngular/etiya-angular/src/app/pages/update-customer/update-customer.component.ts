import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm! : FormGroup;
  customer!: Customer
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private customerService:CustomersService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomerIdFromRoute();
  }

  createCustomerForm(): void{
    this.customerForm = this.formBuilder.group({
      companyName: [this.customer?.companyName || '',Validators.required],
      contactName: [this.customer?.contactName || '',Validators.required],
      contactTitle: [this.customer?.contactTitle || '',Validators.required],
      street: [this.customer?.street || '',Validators.required],
      city: [this.customer?.city  || '',Validators.required],
      region: [this.customer?.region || '',Validators.required],
      postalCode: [this.customer?.postalCode  || '',Validators.required],
      country: [this.customer?.country  || '',Validators.required],
      phone: [this.customer?.phone  || '',Validators.required],
      customerKey: [this.customer?.customerKey  || '',Validators.required],

    })   
  }

  getCustomerIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCustomerById(params['id']);
      else{
        this.createCustomerForm();
      };
    });
  }

  getCustomerById(id:number) {
    this.customerService.getCustomerById(id).subscribe((data) => {
      this.customer = data;
      this.createCustomerForm();
    });
  }

  
  save(){
    if(this.customer) this.update();
    else{
      this.add();
    }
  }

  update() {
    if (this.customerForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Update")
      return;
    }
    const customer:Customer = Object.assign({id:this.customer.id}, this.customerForm.value); 
      this.customerService.update(customer).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/customers");
          this.toastr.success("Customer succesfully updated!","Update")
        }, 1000);
      });
  }

  add(){
    if (this.customerForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Add")
      return;
    }

    const customer:Customer = {
      ...this.customerForm.value,
    }

    this.customerService.add(customer).subscribe(response =>{
      setTimeout(() => {
        this.toastr.success("Customer succesfully add!","Add")
        this.router.navigateByUrl("/dashboard/customers");
      }, 1000);
    })
  }
}
