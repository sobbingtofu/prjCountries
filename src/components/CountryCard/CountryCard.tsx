import { PropsWithChildren } from "react";
import { CountryCardProps } from "../../types/CountryCardProps.type";
import { CountryCardTailwind } from "../common/Styles/CountryCard.style";

function CountryCard({
  country,
  countries,
  setCountries,
}: PropsWithChildren<CountryCardProps>) {
  const handleCountryClick = (): void => {
    const index = countries.findIndex((currentCountry) => {
      return currentCountry.name.common === country.name.common;
    });
    countries[index].selected = !countries[index].selected;
    setCountries([...countries]);
  };
  return (
    <>
      <div
        onClick={handleCountryClick}
        className={CountryCardTailwind}
        id={country.name.common}
      >
        <img src={country.flags.png} className="h-[100px]" />
        <p className="mt-8 font-bold text-xl">{country.name.common}</p>
        <p className="mt-4">{country.capital}</p>
        <p>{country.selected}</p>
      </div>
    </>
  );
}

export default CountryCard;
