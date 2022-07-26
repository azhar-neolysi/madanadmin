
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.page.html',
  styleUrls: ['./org-list.page.scss'],
})
export class OrgListPage implements OnInit {

  orgList = [];
  constructor(private router: Router) { }


  ngOnInit() { this.getDetails(); }
  getDetails() {
    // for (let i = 0; i < 15; i++) {
      const org = {
        company: 'Neolysi',
        name: 'Prabakaran',
        mobile: 999999999,
        gst: 'XVG234MPN123'
      };
      this.orgList.push(org);
    // }
  }

  newLr() {
    this.router.navigate(['org', 'new']);

  }
}
