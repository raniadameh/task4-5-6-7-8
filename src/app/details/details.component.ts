import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserFull } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  viewid!: UserFull;
  id !: string;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.getUserId(params['id']));
    //console.log("HELLO FROM DETAILS COMPONENT ID =", this.id)
  }
  getUserId(id: string) {
    this.usersService.getUserId(id).subscribe(response => {
      //console.log(id, response);
      this.viewid = response;
    });
  }

}
