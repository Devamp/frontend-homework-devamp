import Navbar from "../components/navbar"

// Simple header component which displays a welcome message to the user and a map of South America
const Header = () => {
    return (
        <div className="text-center mt-20">
            <p className="text-7xl font-bold font-mono text-green-600"> EXPLORE SOUTH AMERICA. </p>
            <p className="mt-3 max-w-lg text-xl ml-auto mr-auto"> Welcome to Homework 3! This simple react app will allow you to explore and learn about various countries in South America. Let's get to exploring!</p>
            <img src="../public/SA-map.png" alt="South America Map" className="mt-12 mx-auto max-w-full" style={{ maxWidth: '400px' }} />

        </div>
    )
}

// Primary home component which is returned for rendering
const Home = () => {
    return (
        <div className="bg-gray-100 h-screen w-screen">
            <Navbar />
            <Header />
        </div>
    );
}

export default Home;