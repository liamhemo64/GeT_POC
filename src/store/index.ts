import { create } from 'zustand';

type AppState = {
  selectedTripId: string;
  setSelectedTripId: (id: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectedTripId: 'grand-japan-tour',
  setSelectedTripId: (id) => set({ selectedTripId: id }),
}));
