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
  Employee: any = [];
  redKpiMtrx: any = []
  submitted = false;
  employeeForm!: FormGroup;
  kpiMatrix!: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  isShow = false
  // isboll: any;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: KPIService
  ) {
    this.mainForm();
    this.kpiMatForm();

  }
  ngOnInit() {
    this.readEmployee()
    this.readKpimtrx()
  }

  readEmployee() {
    this.apiService.getEmployees().subscribe((data: any) => {
      this.Employee = data.result;
      console.log("this.employe", data.result)
    })
  }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      department_id: [12],
      has_self_Review: false,
    });
  }

  kpiMatForm() {
    this.kpiMatrix = this.fb.group({
      name: ['', [Validators.required]],
      tooltip: ['', [Validators.required]],
      tittle: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  // get myForm() {
  //   return 0
  //   // return this.employeeForm.controls;
  // }
  onSubmit() {
    console.log("222220", this.employeeForm.value)
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      console.log("222220", this.employeeForm.value)
      return this.apiService.createEmployee(this.employeeForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/kpi-list'));
        },
        error: (e) => {
          console.log("error", e);
        },
      })
    }
  }

  onSun() {
    if (!this.kpiMatrix.valid) {
      return false;
    } else {
      console.log("dddd:::pp", this.kpiMatrix.value)
      return this.apiService.createKpiMatrx(this.kpiMatrix.value).subscribe({
        complete: () => {
          console.log('kpi matrx successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/kpi-list'));
        },
        error: (e: any) => {
          console.log("error in kpi matrx", e);
        },
      })
    }
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
    console.log("this.isShow", this.isShow)

  }

  readKpimtrx() {
    this.apiService.readKpimtrx().subscribe((data: any) => {
      this.redKpiMtrx = data.result;
      console.log("this.employe", data.result)
    })
  }
}
