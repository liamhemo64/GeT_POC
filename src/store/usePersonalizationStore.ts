import { create } from 'zustand';
import { WizardData, defaultWizardData } from '../features/personalization/types/wizard.types';

interface PersonalizationStore {
  data: WizardData;
  setField: <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;
  reset:    () => void;
}

export const usePersonalizationStore = create<PersonalizationStore>((set) => ({
  data: { ...defaultWizardData },

  setField: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),

  reset: () => set({ data: { ...defaultWizardData } }),
}));
