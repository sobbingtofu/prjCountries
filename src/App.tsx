import { useEffect, useState } from "react";
import OtherCountryListSection from "./components/OtherCountryListSection";
import SelectedCountryListSection from "./components/SelectedCountryListSection";

import "./index.css";
import { tCountry } from "./types/Country.type";
import { fetchCountries } from "./api/countries";

function App() {
  const [countries, setCountries] = useState<tCountry[]>([]);
  // countries는 React state로 정의할건데,
  // 그 형태는 tCountry 타입 데이터를 요소로 갖는 배열임
  // 초기값은 빈 배열

  useEffect(() => {
    const prepareCountryData = async () => {
      try {
        const coutriesArray: tCountry[] = await fetchCountries();
        coutriesArray.map((country) => {
          country.selected = false;
        });
        setCountries(coutriesArray);
      } catch (error) {
        console.log("오류 발생");
      }
    };
    prepareCountryData();
  }, []);
  return (
    <>
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
