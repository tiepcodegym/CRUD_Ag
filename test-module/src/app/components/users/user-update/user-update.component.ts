import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  formUpdateUser?: FormGroup;
  id?: number;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formUpdateUser = this.fb.group({
      title: [''],
      code: [''],
      author: ['']
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res=>{
      if(res.success == true){
        this.formUpdateUser?.patchValue({
          title: res.data.title,
          code: res.data.code,
          author: res.data.author
        })
      }
    })
  }

  submit(){
    let data = this.formUpdateUser?.value;
    this.userService.update(data,this.id).subscribe(res=>{
      this.route.navigate(['admin/users'])
    })
  }



}
