import { StateStorage, createJSONStorage, persist } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'
import { create } from 'zustand/react'

const storage = new MMKV()

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value)
  },
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => {
    return storage.delete(name)
  },
}

interface MusicOnState {
    history: string[];
    addHistory: (newHistory: string) => void;
    clearHistory: () => void;
  }
  
  export const useHistoryStore = create<MusicOnState>()(
    persist(
      (set) => ({
        history: [],
        addHistory: (newHistory: string) =>
          set((state) => ({ history: [...state.history, newHistory] })),
        clearHistory: () => set(() => ({ history: [] })),
      }),
      {
        name: "history",
        storage: createJSONStorage(() => zustandStorage),
      }
    )
  );
  