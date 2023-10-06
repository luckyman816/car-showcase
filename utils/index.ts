import { CarProps, FilterProps } from "@/types";

// fetch cars data
export async function fetchCars(filters: FilterProps) {
  // extract filters
  const { manufacturer, year, model, limit, fuel } = filters;
  // api headers
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // api response
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  // fetch result
  const result = await response.json();

  // return result
  return result;
}

// calculate car rent
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day in dollars
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  // calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// generate car image url
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // base url
  const url = new URL("https://cdn.imagin.studio/getimage");
  // extract car data
  const { make, year, model } = car;

  // append api key
  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_CAR_IMAGE_API_KEY || ""
  );

  // append car details
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  // return updated url
  return `${url}`;
};

// update search params
export const updateSearchParams = (type: string, value: string) => {
  // get current search params
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value); // set new search params

  // set new pathname
  const newPathname = `${
    window.location.pathname
  }?${searchParams.toString()}#discover`;

  // return new pathname url
  return newPathname;
};
