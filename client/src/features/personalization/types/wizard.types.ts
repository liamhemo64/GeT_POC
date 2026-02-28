// ─── Wizard Answer Types ─────────────────────────────────────────────────────

export type TravelGroup = 'solo' | 'couple' | 'friends' | 'family';
export type FamilySub   = 'teens' | 'youngChildren';
export type ScaleValue  = 1 | 2 | 3;

export interface WizardData {
  // Step 1
  arrivalDate:   Date | null;
  departureDate: Date | null;
  // Step 2 - Locations
  arrivalLocation: string;
  departureLocation: string;
  // Step 3 - Rent a Car
  rentCar: boolean | null;
  // Step 4 - Theme Parks
  loveParks: boolean | null;
  selectedParks: string[];
  // Step 5
  travelGroup:   TravelGroup | null;
  familySub:     FamilySub | null;
  // Step 4 – Travel Pace
  travelPace:    ScaleValue | null;
  // Step 5 – Nature
  natureLevel:   ScaleValue | null;
  // Step 6 – City
  cityLevel:     ScaleValue | null;
  // Step 7
  interests:     string[];
  // Step 8
  wishlist:      string;
}

export const WIZARD_STEP_COUNT = 10;

export const defaultWizardData: WizardData = {
  arrivalDate:   null,
  departureDate: null,
  arrivalLocation: '',
  departureLocation: '',
  rentCar:       null,
  loveParks:     null,
  selectedParks: [],
  travelGroup:   null,
  familySub:     null,
  travelPace:    null,
  natureLevel:   null,
  cityLevel:     null,
  interests:     [],
  wishlist:      '',
};
