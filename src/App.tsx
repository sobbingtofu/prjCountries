/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import OtherCountryListSection from "./components/OtherCountryListSection";
import SelectedCountryListSection from "./components/SelectedCountryListSection";
import { tCountry } from "./types/Country.type";
import { fetchCountries } from "./api/countries";
import ArrangeTypeBtn from "./components/ArrangeTypeBtn";
import "./index.css";
import { fetchSelectedCountries } from "./api/jsonServer";
import { tJsonServerArrayElement } from "./types/JsonServerArrayElement.type";
import useCountriesStore from "./zustand/countriesStore";

function App() {
  const countries = useCountriesStore((state) => state.countries);
  // zustand store에서 전역 상태값 countries 가져오기

  const setCountries = useCountriesStore((state) => state.setCountries);
  // zustand store에서 전역 상태 제어 함수 setCountries 가져오기

  const alphabeticalAarrrange = useCountriesStore(
    (state) => state.alphabeticalArrrange,
  );
  // zustand store에서 전역 상태값 alphabeticalArrrange 가져오기

  useEffect(() => {
    const prepareCountryData = async (): Promise<void> => {
      try {
        const fetchedAllCountriesArray: tCountry[] = await fetchCountries();
        // 모든 국가 데이터 불러오는 api 실행시킨 결과값을 상수 fetchedAllCountriesArray에 저장

        const fetchedSelectedCountriesArray: tJsonServerArrayElement[] =
          await fetchSelectedCountries();
        const fetchedSelectedCountryNamesArray: string[] =
          fetchedSelectedCountriesArray.map((item) => {
            return item.countryName;
          });
        // 이전에 선택했던 국가 정보 불러오는 api 실행시킨 결과값을 상수 fetchedSelectedCountriesArray에 저장
        // 이름만 따로 쓸 일이 많으므로 map메서드로 이름의 배열 생성해 상수 fetchedSelectedCountryNamesArray에 저장

        fetchedAllCountriesArray.forEach((country) => {
          if (fetchedSelectedCountryNamesArray.includes(country.name.common)) {
            country.selected = true;
          } else {
            country.selected = false;
          }
        });
        // 모든 국가 정보 배열에 대해, 이전에 선택했던 국가 이름 배열에 이름이 있을 경우
        // 해당 국가의 selected 값을 true로 설정하는 로직

        setCountries(fetchedAllCountriesArray);
        // 각 국가의 selected 값이 설정된 국가 정보 배열을 전역 상태 countries에 저장
      } catch (error) {
        console.log("오류 발생");
      }
    };
    prepareCountryData();
  }, []);

  useEffect(() => {
    // 전역 상태 값인 alphabeticalAarrrange에 따라
    // 국가 정보 배열 알파벳 순/역순 정렬 실행 후
    // 전역 상태 countries에 저장
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
      <ArrangeTypeBtn />

      <SelectedCountryListSection />

      <OtherCountryListSection />
    </>
  );
}

export default App;
