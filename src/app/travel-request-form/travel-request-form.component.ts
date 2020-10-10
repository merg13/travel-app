import { ITravelRequest } from './../models/ITravelRequest';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'travel-request-form',
  templateUrl: './travel-request-form.component.html',
  styleUrls: ['./travel-request-form.component.css']
})
export class TravelRequestFormComponent implements OnInit {

  @Input() model: ITravelRequest;
  numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

  mockRequests: ITravelRequest [];

  constructor() {
    this.model = JSON.parse(localStorage.getItem('TravelRequest'));

    // fake model and array of requests for debugging
    this.model = new ITravelRequest();
  }

  ngOnInit(): void {
  }

  calculateTotalCost(e: Event): void {

    try {
      this.model.totalCost = (this.model.numTravelers * this.model.arbitraryCost) ?? 0.0;
    }
    catch(e) {
      // throw new exception('unable to calculate total cost', e);
      console.log(e);
    }
  }

  submitForm(e: Event): void {

    if (this.mockRequests != null) {
      this.mockRequests.push(this.model);
    }
    else {
      this.mockRequests = [this.model];
    }
  }

}
