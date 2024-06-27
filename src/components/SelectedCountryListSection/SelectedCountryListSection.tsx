import { PropsWithChildren } from "react";
import { CountryListSectionProps } from "../../types/CountryListSectionProps.type";

function SelectedCountryListSection({
  countries,
}: PropsWithChildren<CountryListSectionProps>) {
  return (
    <>
      <h1 className="mx-auto w-max text-center text-3xl font-bold mt-12">
        Selected Countries
      </h1>
      <div className="mx-[90px] my-[20px] grid grid-cols-4 gap-20">
        {countries.map((country) => {
          if (country.selected === true) {
            return (
              <div
                className="flex flex-col items-center justify-start h-max bg-red-200 rounded-3xl p-8 cursor-pointer"
                key={country.name.common}
                id={country.name.common}
              >
                <img src={country.flags.png} className="h-[100px]" />
                <p className="mt-8 font-bold text-xl">{country.name.common}</p>
                <p className="mt-4">{country.capital}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default SelectedCountryListSection;
