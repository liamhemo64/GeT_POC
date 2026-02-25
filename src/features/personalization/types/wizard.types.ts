// ─── Wizard Answer Types ─────────────────────────────────────────────────────

export type TravelGroup = 'solo' | 'couple' | 'friends' | 'family';
export type FamilySub   = 'teens' | 'youngChildren';
export type ScaleValue  = 1 | 2 | 3;

export interface WizardData {
  // Step 1
  arrivalDate:   Date | null;
  departureDate: Date | null;
  // Step 2
  travelGroup:   TravelGroup | null;
  familySub:     FamilySub | null;
  // Step 3 – Travel Pace
  travelPace:    ScaleValue | null;
  // Step 4 – Nature
  natureLevel:   ScaleValue | null;
  // Step 5 – City
  cityLevel:     ScaleValue | null;
  // Step 6
  interests:     string[];
  // Step 7
  wishlist:      string;
}

export const WIZARD_STEP_COUNT = 7;

export const defaultWizardData: WizardData = {
  arrivalDate:   null,
  departureDate: null,
  travelGroup:   null,
  familySub:     null,
  travelPace:    null,
  natureLevel:   null,
  cityLevel:     null,
  interests:     [],
  wishlist:      '',
};
