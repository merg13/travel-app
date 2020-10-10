
export class ITravelRequest {
  origin = '';
  destination = '';
  startDate = new Date();
  numTravelers = 1;
  submissionDate = new Date();
  readonly arbitraryCost = 150;
  totalCost = 1 * this.arbitraryCost;
}
