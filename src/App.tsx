/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import OtherCountryListSection from "./components/OtherCountryListSection";
import SelectedCountryListSection from "./components/SelectedCountryListSection";
import { tCountry } from "./types/Country.type";
import { fetchCountries } from "./api/countries";
import ArrangeTypeBtn from "./components/ArrangeTypeBtn";
import "./index.css";
import { fetchSelectedCountries } from "./api/jsonServer";
import { tJsonServerArrayElement } from "./types/JsonServerArrayElement.type";

function App() {
  const [countries, setCountries] = useState<tCountry[]>([]);

  const [alphabeticalAarrrange, setAlphabeticalArrange] =
    useState<boolean>(true);

  useEffect(() => {
    const prepareCountryData = async () => {
      try {
        const fetchedAllCountriesArray: tCountry[] = await fetchCountries();

        const fetchedSelectedCountriesArray: tJsonServerArrayElement[] =
          await fetchSelectedCountries();

        const fetchedSelectedCountryNamesArray: string[] =
          fetchedSelectedCountriesArray.map((item) => {
            return item.countryName;
          });
        console.log(fetchedSelectedCountryNamesArray);
        fetchedAllCountriesArray.map((country) => {
          if (fetchedSelectedCountryNamesArray.includes(country.name.common)) {
            country.selected = true;
          } else {
            country.selected = false;
          }
        });
        if (alphabeticalAarrrange) {
          const sortedCountriesArray = fetchedAllCountriesArray.sort(
            function (a, b): number {
              if (a.name.common > b.name.common) {
                return 1;
              } else {
                return -1;
              }
            },
          );
          setCountries(sortedCountriesArray);
        } else {
          const sortedCountriesArray = fetchedAllCountriesArray.sort(
            function (a, b): number {
              if (a.name.common > b.name.common) {
                return -1;
              } else {
                return 1;
              }
            },
          );
          setCountries(sortedCountriesArray);
        }
      } catch (error) {
        console.log("오류 발생");
      }
    };
    prepareCountryData();
  }, []);

  useEffect(() => {
    console.log(alphabeticalAarrrange);
    if (alphabeticalAarrrange) {
      const sortedCountriesArray = countries.sort(function (a, b): number {
        if (a.name.common > b.name.common) {
          return 1;
        } else {
          return -1;
        }
      });
      setCountries([...sortedCountriesArray]);
    } else {
      const sortedCountriesArray = countries.sort(function (a, b): number {
        if (a.name.common > b.name.common) {
          return -1;
        } else {
          return 1;
        }
      });
      setCountries([...sortedCountriesArray]);
    }
  }, [alphabeticalAarrrange]);

  return (
    <>
      <ArrangeTypeBtn
        alphabeticalAarrrange={alphabeticalAarrrange}
        setAlphabeticalArrange={setAlphabeticalArrange}
      />

      <SelectedCountryListSection
        countries={countries}
        setCountries={setCountries}
      />
      <OtherCountryListSection
        countries={countries}
        setCountries={setCountries}
      />
    </>
  );
}

export default App;
