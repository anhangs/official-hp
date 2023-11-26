import { create } from "zustand";

export type LoadingStore = {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
};

export const useLoading = create<LoadingStore>((set) => ({
  isLoading: false,
  startLoading: () => set((state) => ({ isLoading: true })),
  endLoading: () => set((state) => ({ isLoading: false })),
}));