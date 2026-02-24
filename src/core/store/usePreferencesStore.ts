import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = Platform.OS === 'web'
  ? createJSONStorage(() => localStorage)
  : createJSONStorage(() => AsyncStorage);

type PreferencesState = {
  selectedInterests: string[];
  adventureLevel: number;
  budgetLevel: number;
  hasCompletedOnboarding: boolean;
  language: string;
  isHydrated: boolean;
  setHydrated: () => void;
  toggleInterest: (id: string) => void;
  setAdventureLevel: (level: number) => void;
  setBudgetLevel: (level: number) => void;
  completeOnboarding: () => void;
};

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set, get) => ({
      selectedInterests: [],
      adventureLevel: 50, // Default mid-range
      budgetLevel: 50, // Default mid-range
      hasCompletedOnboarding: false,
      language: 'en',
      isHydrated: false,

      setHydrated: () => set({ isHydrated: true }),

      toggleInterest: (id) => {
        const current = get().selectedInterests;
        const updated = current.includes(id)
          ? current.filter((i) => i !== id)
          : [...current, id];
        set({ selectedInterests: updated });
      },

      setAdventureLevel: (level) => {
        set({ adventureLevel: level });
      },

      setBudgetLevel: (level) => {
        set({ budgetLevel: level });
      },

      completeOnboarding: () => {
        set({ hasCompletedOnboarding: true });
      },
    }),
    {
      name: 'preferences-storage',
      storage,
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
