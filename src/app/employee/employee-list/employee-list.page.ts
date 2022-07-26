
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { EmployeeApiService } from 'src/app/services/employee/employee-api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
  employeeList: any = [];
  constructor(
    private router: Router,
    private employeeApi: EmployeeApiService,
    private loader: LoaderService,
    private alert: AlertService,
    private toaster: ToastService
  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.getEmployeesList();
  }
  getEmployeesList() {
    this.loader.createLoader();
    this.employeeApi.getEmployeeById('').subscribe((success) => {
      this.loader.dismissLoader();
      console.log('success', success);
      this.employeeList = success;
    },
      failure => {
        this.loader.dismissLoader();
        console.log('failure', failure);

      }
    );
  }
  deleteEmployee(employeeId) {
    this.alert.alertPromt(`Are you sure you want to delete? `).then(data => {
      if (Boolean(data)) {
        this.loader.createLoader();
        const req: any = {};
        req.employeeId = employeeId;
        req.refModifiedBy = 1;
        this.employeeApi.deleteEmployee(employeeId, req).subscribe(success => {
          this.loader.dismissLoader();
          if (success[0].status === 3) {
            this.toaster.success(success[0].msg);
            this.ionViewWillEnter();
          }
          else
            {this.toaster.danger(success[0].msg);}
        }, failure => {
          this.loader.dismissLoader();
        });
      }
    });
  }
  newEmployee() {
    this.router.navigate(['employee', 'new']);

  }
  editEmployee(employeeId) {
    this.router.navigate(['employee', employeeId, 'edit']);
  }

}
