import { tCountry } from "./Country.type";

export interface CountryListSectionProps {
  countries: tCountry[];
  setCountries: React.Dispatch<React.SetStateAction<tCountry[]>>;
}
