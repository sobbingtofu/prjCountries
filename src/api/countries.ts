import axios from "axios";
import { tCountry } from "../types/Country.type";

export const fetchCountries = async (): Promise<tCountry[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};
