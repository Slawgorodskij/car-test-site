import {ICar} from "@/components/CarCard/interface";
import {IFilter} from "@/types";

export const fetchCars = async (filter: IFilter) => {
    const {manufacturer, model, year, limit, fuel} = filter
    const headers = {
        'X-RapidAPI-Key': process.env.X_RAPID_API_KEY ?? '',
        'X-RapidAPI-Host': process.env.X_RAPID_API_HOST ?? '',
    }

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel=${fuel}&limit=${limit}`, {
            headers: headers,
        });

    return await response.json();
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

//неработает
export const generateCarImageUrl = (car: ICar, angle?: string) => {
    return '/hero.png';
    const url = new URL("https://cdn.imagin.studio/getimage");
    const {make, model, year} = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearcheParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    return `${window.location.pathname}?${searchParams.toString()}`
}