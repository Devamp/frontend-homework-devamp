import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

/**
 * Sove "canvas already in use" issue
 * 
 * Source: https://stackoverflow.com/questions/76532569/  im-having-problems-registering-the-category-scale-in-react-chart-js2/76536193
 */
Chart.register(...registerables);

// componenet to build the chart using the provided data via props
const BuildChart = ({ data }) => {

    // map countries to their population
    const countriesPop = {}
    data.map(country => {
        countriesPop[country['name']] = country['population']
    });

    // extract country names and populations from the data object
    const countryNames = Object.keys(countriesPop)
    const populations = Object.values(countriesPop)

    // make chart data
    const chartData = {
        labels: countryNames,
        datasets: [
            {
                label: 'Population',
                data: populations,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                
            },
        ],
    };

    // chart options
    const chartOptions = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: 'rgba(255, 255, 255, 1)',
                    font: {
                        size: 18
                    }
                },
            },
        },
        scales: {
            y: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)', 
                    font: {
                        size: 16
                    }
                    
                },
                title: {
                    display: true,
                    text: 'Country',
                    color: 'rgba(255, 255, 255, 1)', 
                    font: {
                        size: 16, 
                    },
                },
            },
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)', 
                    font: {
                        size: 16
                    },
                },
                title: {
                    display: true,
                    text: 'Population',
                    color: 'rgba(255, 255, 255, 1)', 
                    font: {
                        size: 16, 
                    },
                },
                
            },
            
        },
    };


    return (
        <div className="bg-slate-800 text-white p-5 w-3/4 rounded shadow-lg shadow-black">            
            <p className="font-mono text-bold text-2xl text-center">South American Population</p>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    );

};

// componenet to fetch countries data and build the chart
const ChartContainer = () => {
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
        <div className="bg-gray-100 flex justify-center items-start h-screen p-10">
            <BuildChart data={countries} />
        </div>
    );
}

// primary population componenet to render the page
const Population = () => {
    return (
        <div>
            <Navbar />
            <ChartContainer />
        </div>
    );
}

export default Population;