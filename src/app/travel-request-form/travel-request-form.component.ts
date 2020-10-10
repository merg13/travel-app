import { ITravelRequest } from './../models/ITravelRequest';
import { Component, Input, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

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

    //temp object in memory for sake of demonstrating submissions
    const submittedModel = new ITravelRequest();
    submittedModel.origin = this.model.origin;
    submittedModel.destination = this.model.destination;
    submittedModel.startDate = this.model.startDate;
    submittedModel.numTravelers = this.model.numTravelers;
    submittedModel.submissionDate = this.model.submissionDate;
    submittedModel.totalCost = this.model.totalCost;

    this.model.isBusy = true;

    if (this.mockRequests != null) {
      this.mockRequests.push(this.model);
    }
    else {
      this.mockRequests = [submittedModel];
    }

    // fake delay simulating calling the server to save the submission
    setTimeout(() => { this.model.isBusy = false; }, 3000);
  }

}
