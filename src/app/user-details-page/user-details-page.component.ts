import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  id !: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.id = params.get('id') || ''; console.log(this.id); });
  }
  goToPrevious() {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }
  goToDetails() {
    console.log(this.id);
    this.router.navigate(['details'], { queryParams: { id: this.id }, relativeTo: this.route });
  }
  goToPosts() {
    console.log(this.id);
    this.router.navigate(['posts'], { queryParams: { id: this.id }, relativeTo: this.route });
  }
}
