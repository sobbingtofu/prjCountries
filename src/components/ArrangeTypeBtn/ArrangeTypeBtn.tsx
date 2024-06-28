import { useState } from "react";
import { ArrangeTypeBtnTailwind } from "../common/Styles/ArrangeTypeBtn.style";
import useCountriesStore from "../../zustand/countriesStore";

function ArrangeTypeBtn() {
  const setAlphabeticalArrange = useCountriesStore(
    (state) => state.setAlphabeticalArrrange,
  );

  const alphabeticalAarrrange = useCountriesStore(
    (state) => state.alphabeticalArrrange,
  );

  const [buttonTextAlphabetical, setButtonTextAlphabetical] = useState<string>(
    alphabeticalAarrrange ? "현재 정렬: 알파벳순" : "현재 정렬: 알파벳 역순",
  );

  const handleArrangeTypeBtnClick = (): void => {
    setAlphabeticalArrange(!alphabeticalAarrrange);
    setButtonTextAlphabetical(
      alphabeticalAarrrange ? "현재 정렬: 알파벳순" : "현재 정렬: 알파벳 역순",
    );
  };

  return (
    <div className="flex justify-center">
      <button
        className={ArrangeTypeBtnTailwind}
        onClick={handleArrangeTypeBtnClick}
        onMouseOver={() => {
          setButtonTextAlphabetical(
            alphabeticalAarrrange
              ? "알파벳 역순으로 정렬하기"
              : "알파벳 순으로 정렬하기",
          );
        }}
        onMouseLeave={() => {
          setButtonTextAlphabetical(
            alphabeticalAarrrange
              ? "현재 정렬: 알파벳순"
              : "현재 정렬: 알파벳 역순",
          );
        }}
      >
        {buttonTextAlphabetical}
      </button>
    </div>
  );
}

export default ArrangeTypeBtn;
