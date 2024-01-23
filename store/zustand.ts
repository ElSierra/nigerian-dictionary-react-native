import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";
import { create } from "zustand";
import uuid from "react-native-uuid";

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

export interface Search {
  word: string;
  origin: string;
  id: string;
  sentence: string;
  type: string;
  etymology: string;
  definition: string;
  fullword: string;
  errorMsg?: string;
}
interface SearchListState {
  searches: Search[];
  addSearches: (newSearches: Search) => void;
  removeSearches: (id: string) => void;
  ClearSearches: () => void;
}

export const useSearchStore = create<SearchListState>()(
  persist(
    (set) => ({
      searches: [], // Update the type of searches to never[]
      removeSearches: (id: string) =>
        set((state) => {
          const filteredSearches = state.searches.filter(
            (search) => search.id !== id
          );
          return { searches: filteredSearches };
        }),
      addSearches: (newSearches: Search) =>
        set((state) => {
          const updatedSearchWithUUID = {
            ...newSearches,
            id: uuid.v4().toString(),
          };
          return { searches: [updatedSearchWithUUID, ...state.searches] };
        }),
      ClearSearches: () => set(() => ({ searches: [] })),
    }),
    {
      name: "searches",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

interface HistoryListState {
  searches: Search[];
  addSearches: (newSearches: Search) => void;
  removeSearches: (id: string) => void;
  ClearSearches: () => void;
}
export const useHistoryStore = create<HistoryListState>()(
  persist(
    (set) => ({
      searches: [],
      addSearches: (newSearches: Search) =>
        set((state) => {
          for (let i = 0; i < state.searches.length; i++) {
            if (state.searches[i].id === newSearches.id) {
              return { searches: state.searches };
            }
          }
          return { searches: [newSearches, ...state.searches] };
        }),
      removeSearches: (id: string) =>
        set((state) => {
          const filteredSearches = state.searches.filter(
            (search) => search.id !== id
          );
          return { searches: filteredSearches };
        }),

      ClearSearches: () => set(() => ({ searches: [] })),
    }),
    {
      name: "history",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

interface Device {
  isHighEnd: boolean;
}

interface DeviceState {
  device: Device;
  setDevice: (device: Device) => void;
}

export const useDeviceStore = create<DeviceState>()(
  persist(
    (set) => ({
      device: { isHighEnd: false},
      setDevice: (device: Device) => set(() => ({ device })),
    }),
    {
      name: "device",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
