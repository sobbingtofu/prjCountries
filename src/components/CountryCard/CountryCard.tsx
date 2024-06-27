import { PropsWithChildren } from "react";
import { CountryCardProps } from "../../types/CountryCardProps.type";

function CountryCard({
  flag,
  countryName,
  capitalName,
}: PropsWithChildren<CountryCardProps>) {
  const handleCountryClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    console.log(event.currentTarget.id);
  };
  return (
    <>
      <div
        onClick={handleCountryClick}
        className="flex flex-col items-center justify-start h-max bg-red-200 rounded-3xl p-8 cursor-pointer"
        id={countryName}
      >
        <img src={flag} className="h-[100px]" />
        <p className="mt-8 font-bold text-xl">{countryName}</p>
        <p className="mt-4">{capitalName}</p>
      </div>
    </>
  );
}

export default CountryCard;
