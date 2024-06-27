import { useEffect, useState } from "react";
import OtherCountryListSection from "./components/OtherCountryListSection";
import SelectedCountryListSection from "./components/SelectedCountryListSection";
import { tCountry } from "./types/Country.type";
import { fetchCountries } from "./api/countries";
import ArrangeTypeBtn from "./components/ArrangeTypeBtn";
import "./index.css";

function App() {
  const [countries, setCountries] = useState<tCountry[]>([]);

  const [alphabeticalAarrrange, setAlphabeticalArrange] =
    useState<boolean>(true);

  useEffect(() => {
    const prepareCountryData = async () => {
      try {
        const selectedAddedCoutriesArray: tCountry[] = await fetchCountries();
        selectedAddedCoutriesArray.map((country) => {
          country.selected = false;
        });
        if (alphabeticalAarrrange) {
          const sortedCountriesArray = selectedAddedCoutriesArray.sort(
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
          const sortedCountriesArray = selectedAddedCoutriesArray.sort(
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
