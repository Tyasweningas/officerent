import { City } from "../types/city.types";

const cityNames = [
    "Jakkarta Pusat",
    "Jakarta Selatan",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Medan",
    "Semarang",
    "Makassar",
    "Bekasi",
    "Depok"
];

export const cities: City[] = cityNames.map((cityName, i) => {
    // const officeCount = 

    return {
        id: 1 + i,
        cityNames: cityName,
        officeCount: 1,
        image: `/assets/images/thumbnails/thumbnails-${(i & 3) + 1}.png`,
        slug: cityName.toLowerCase().replace(/ /g, "-")
    }
});

