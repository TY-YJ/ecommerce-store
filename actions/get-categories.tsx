
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    // Add a cache-busting parameter using a random timestamp
    const timestamp = Date.now();
    const res = await fetch(`${URL}?timestamp=${timestamp}`);

    return res.json();
};

export default getCategories