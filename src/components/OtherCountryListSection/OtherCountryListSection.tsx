import { PropsWithChildren } from "react";
import { CountryListSectionProps } from "../../types/CountryListSectionProps.type";
import CountryCard from "../CountryCard";
import { ListTailwind } from "../common/Styles/CountryList.style";

function OtherCountryListSection({
  countries,
  setCountries,
}: PropsWithChildren<CountryListSectionProps>) {
  return (
    <>
      <h1 className="mx-auto w-max text-center text-3xl font-bold my-12">
        Other Countries
      </h1>
      <div className={ListTailwind}>
        {countries.map((country) => {
          if (country.selected == false) {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                countries={countries}
                setCountries={setCountries}
              ></CountryCard>
            );
          }
        })}
      </div>
    </>
  );
}

export default OtherCountryListSection;
