import { PropsWithChildren } from "react";
import { CountryListSectionProps } from "../../types/CountryListSectionProps.type";
import CountryCard from "../CountryCard";

function OtherCountryListSection({
  countries,
}: PropsWithChildren<CountryListSectionProps>) {
  console.log(countries);
  return (
    <>
      <h1 className="mx-auto w-max text-center text-3xl font-bold my-12">
        Other Countries
      </h1>
      <div className="mx-[90px] my-[20px] grid grid-cols-4 gap-20">
        {countries.map((country) => {
          if (country.selected === false) {
            return (
              <CountryCard
                key={country.name.common}
                id={country.name.common}
                flag={country.flags.png}
                countryName={country.name.common}
                capitalName={country.capital}
              ></CountryCard>
            );
          }
        })}
      </div>
    </>
  );
}

export default OtherCountryListSection;
