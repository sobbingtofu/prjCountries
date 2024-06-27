import { tCountry } from "./Country.type";

export interface CountryCardProps {
  country: tCountry;
  countries: tCountry[];
  setCountries: React.Dispatch<React.SetStateAction<tCountry[]>>;
}
