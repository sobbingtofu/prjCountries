import useCountriesStore from "../../zustand/countriesStore";
import CountryCard from "../CountryCard";
import { ListTailwind } from "../common/Styles/CountryList.style";

function SelectedCountryListSection() {
  const countries = useCountriesStore((state) => state.countries);
  return (
    <>
      <h1 className="mx-auto w-max text-center text-3xl font-bold mt-4 mb-12">
        Selected Countries
      </h1>
      <div className={ListTailwind}>
        {countries.map((country) => {
          if (country.selected == true) {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
              ></CountryCard>
            );
          }
        })}
      </div>
    </>
  );
}

export default SelectedCountryListSection;
