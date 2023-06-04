import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KPIService } from '../service/kpi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpi-form',
  templateUrl: './kpi-form.component.html',
  styleUrls: ['./kpi-form.component.scss']
})
export class KpiFormComponent implements OnInit {

  submitted = false;
  employeeForm!: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: KPIService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  // Choose designation with select dropdown
  // updateProfile(e) {
  //   this.employeeForm.get('designation').setValue(e, {
  //     onlySelf: true,
  //   });
  // }
  // Getter to access form control
  get myForm() {
    return 0
    // return this.employeeForm.controls;
  }
  onSubmit() {
    
    this.submitted = true;
    if (this.employeeForm.valid) {
      return false;
    } else {
      console.log("222220",this.employeeForm.value)
      return this.apiService.createEmployee(this.employeeForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/kpi-list'));
        },
        error: (e) => {
          console.log("error",e);
        },
      });
    }
  }
}
