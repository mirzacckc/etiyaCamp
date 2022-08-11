import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDashboardComponent } from './service-dashboard.component';

describe('ServiceDashboardComponent', () => {
  let component: ServiceDashboardComponent;
  let fixture: ComponentFixture<ServiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
