import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent implements OnInit {

  address = "";
  userIcon ="";

  extendedOffers = [
    {
      "name" : "Anil kapoor",
      "address": "Pune",
      "post": "Director, Piramal Enterprises",
      "acceptedOfferDate":"21 Jul 2020",
      "extendedOnDate": "23 Jul 2020",
      "joiningDate" : "1 Sep 2020",
      "comment" : "Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet"
    }
  ];

  candidateDetails = [
    {
      "name" : "Mohit Sharma",
      "post":"",
      "address": "Pune",
      "hire": "Hire",
      "awaitingFeedback": false,
      "undecided": false,
      "value1": "8",
      "value2": "2",
      "status": "Undicided",
      "date": "26 Aug 2020",
      "comment": "Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet "
    },
    {
      "name" : "Kumar Dey",
      "post":"",
      "address": "Mumbai",
      "hire": "Hire",
      "awaitingFeedback": true,
      "undecided": false,
      "value1": "5",
      "value2": "8",
      "status": "No Hire",
      "date": "29 Sep 2020",
      "comment": "Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame"
    },
    {
      "name" : "Rajesh Varma",
      "post":"",
      "address": "Pune",
      "hire": "Hire",
      "awaitingFeedback": false,
      "undecided": false,
      "value1": "7",
      "value2": "8",
      "date": "15 Dec 2020",
      "status": "No Hire",
      "comment": "Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.getExtendedOfferdetails();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.candidateDetails, event.previousIndex, event.currentIndex);
  }

  getExtendedOfferdetails(){}

}
