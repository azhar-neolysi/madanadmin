import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.page.html',
  styleUrls: ['./org-form.page.scss'],
})
export class OrgFormPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  submit() {
    this.router.navigate(['org']);
  }
}
