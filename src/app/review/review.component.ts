import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../reviewInterface';
import { ReviewService } from '../review.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  review: Review;
  struct= new FormGroup({
  name: new FormControl('',Validators.required),
  email: new FormControl('',Validators.required),
  feedback: new FormControl('',Validators.required),
  comment: new FormControl(''),
  })
  
  constructor(
    private rvService: ReviewService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.rvService.getRequest()
      .subscribe((data: any) => (this.struct.setValue({
        name: data.name,
        email: data.email,
        feedback: data.feedback,
        comment: data.comment
        })));
  }

  unnee(x: any){
    if(x) {this.initialize(); console.log(x);}
    if(x) alert("Thanks for your feedback!!");
    else alert("oops! something went wrong :(");
  }

  submit(){  
    this.rvService.postRequest(this.struct.value)
    .subscribe(review => this.unnee(review));
  }


}
