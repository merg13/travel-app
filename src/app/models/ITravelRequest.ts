
export class ITravelRequest {
  origin = '';
  destination = '';
  startDate = new Date();
  numTravelers = 1;
  submissionDate: Date | null = null;
  readonly arbitraryCost = 150;
  totalCost = 1 * this.arbitraryCost;
  isBusy = false;
}
