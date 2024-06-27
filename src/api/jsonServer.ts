import axios from "axios";

const JSON_SEVER_BASE_URL: string = "https://circular-clean-wound.glitch.me/";

const selectedCountryApi = axios.create({
  baseURL: JSON_SEVER_BASE_URL,
});

export const fetchSelectedCountries = async () => {
  try {
    const path = "/selectedCountryName";
    const response = await selectedCountryApi.get(path);

    return response.data;
  } catch (error) {
    console.log(
      "데이터 가져오던 중 오류 발생해 국가를 하나도 선택 안했다고 가정함",
    );
    return [];
  }
};

export const postCountryNameToSelectedCountries = async (
  countryName: string,
) => {
  try {
    const path = "/selectedCountryName";
    const response = await selectedCountryApi.post(path, {
      id: countryName,
      countryName,
    });
    return response.data;
  } catch (error) {
    console.log("오류 발생");
  }
};

export const deleteCountryNameFromSelectedCountries = async (
  countryName: string,
) => {
  try {
    const path = `/selectedCountryName/${countryName}`;
    const response = await selectedCountryApi.delete(path);
    return response.data;
  } catch (error) {
    console.log("오류 발생");
  }
};
