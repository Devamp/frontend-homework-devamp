import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// componenet to create the pie chart graph of country gdp
const PieChart = () => {
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

    // map country names to their gdp
    const countryGDP = {}
    countries.map(country => {
        countryGDP[country['name']] = country['gdp_billions']
    })

    // extract country names and gdp from the data object
    const countryNames = Object.keys(countryGDP)
    const gdp = Object.values(countryGDP)


    const colorPalette = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(128, 128, 0, 1)',
        'rgba(128, 0, 128, 1)',
        'rgba(0, 128, 128, 1)',
        'rgba(255, 128, 0, 1)'
    ];

    // Pie chart data
    const chartData = {
        labels: countryNames,
        datasets: [{
            data: gdp,
            backgroundColor: colorPalette.slice(0, countryNames.length),
            borderColor: colorPalette.slice(0, countryNames.length).map(color => color.replace('0.5', '1')),
            borderWidth: 1,
        }]
    };

    // Pie chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: 'rgba(255, 255, 255, 1)',
                    font: {
                        size: 16
                    }
                },
            },
            
        },
    };

    return (
        <div className="mt-5 m-auto flex flex-col items-center p-5 w-full max-w-lg bg-slate-800 rounded-2xl shadow-lg shadow-black">
            <p className="text-center text-xl font-mono text-white">The pie chart below showcases the total GDP (in billions) makeup of countries in South America.</p>
            <Pie data={chartData} options={chartOptions} />
        </div>
    );

}

// primary GDP component which is returned for rendering
const GDP = () => {
    return (
        <div className="bg-gray-100 h-screen w-screen">
            <Navbar />
            <PieChart />

        </div>
    );
}

export default GDP;