import { useEffect, useState } from "react";
import Navbar from "../components/navbar"

/**
 * Componenet to build the card display for each country
 * 
 * Number formatting source: https://stackoverflow.com/questions/2901102/ how-to-format-a-number-with-commas-as-thousands-separators
 * 
 */
const Card = ({country}) => {
    return (
        <div className="bg-slate-700 shadow-lg shadow-black rounded-lg h-auto mb-5 p-3">
            <div className="title bg-white font-bold text-2xl rounded text-center">
                <h1>{country['name']}</h1>
            </div>
            <div className="flag mt-5">
                <img src={country['flag_png']} alt={country['flag_alt'] || 'Data not avaliable.'} className="mt-2  mx-auto max-w-full" style={{ width: '200px', height: '125px' }} />
            </div>
            <div className="info mt-5 p-3 text-white ">
                <p><strong>Population: </strong>{country['population'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 'Data not avaliable.'}</p>
                <p><strong>GDP (billions): </strong>{country['gdp_billions'] || 'Data not avaliable.'}</p>
                <p><strong>Official Languages: </strong>{country.official_languages.join(', ') || 'Data not avaliable.'}</p>
            </div>
        </div>
    );
}

// Compoenent to hold the countries cards
const CardContainer = () => {    

    const [countries, setCountries] = useState([]);

    // useEffect to fetch countries data via API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://cs464p564-frontend-api.vercel.app/api/countries');
                const data = await res.json();
                setCountries(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCountries();

    }, []);

    return (
        <div className="bg-gray-100 flex justify-center items-center p-5 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5">
                {countries.map(country => <Card key={country.id} country={country} />)}
            </div>
        </div>
    );
}

const List = () => {
    return (
        <div className="">
            <Navbar />
            <CardContainer />
        </div>
    );
}

export default List;