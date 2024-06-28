import { create } from "zustand";
import { tCountry } from "../types/Country.type";

interface TuseCountriesStore {
  alphabeticalArrrange: boolean;
  setAlphabeticalArrrange: (option: boolean) => void;
  countries: tCountry[];
  setCountries: (countries: tCountry[]) => void;
}

const useCountriesStore = create<TuseCountriesStore>((set) => ({
  alphabeticalArrrange: true,
  setAlphabeticalArrrange: (option) => set({ alphabeticalArrrange: option }),
  countries: [],
  setCountries: (countries) => set({ countries }),
}));

export default useCountriesStore;
