
// import Banner from "./Banner"
// import About from "../About/About";
// import Card from "./Card";
// // import App from "../../App";

// const Home = () => {
    
//     return (
//         <>
//             <Banner />
//             {/* <App></App> */}
//             <div className="md:col-span-2 ">
//                     {
//                         news.map(aNews => <Card key={aNews._id} news={aNews}></Card>)
//                     }
//                 </div>
//             <About />
//         </>
//     );
// };

// export default Home;

// Home.jsx
// import React from "react";

// Card.jsx
// import React from "react";
// Home.jsx
// import React from "react";
import Banner from "./Banner";
import About from "../About/About";
import Card from "./Card";
import 'animate.css/animate.min.css';

// import news from "../../news.json";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        document.title='REALESTATE/HOME'
    },[])
    const hotels = useLoaderData();
    console.log(hotels);
    return (
        <>
            <Banner />
            <div className="py-14">
                <h2 className="text-4xl font-bold text-center text-blue-950" data-aos="fade-up"
     data-aos-duration="3000">Discover Our Estate Listings</h2>
                <p className="text-center mt-5" data-aos="fade-up"
     data-aos-duration="3000">Discover Our Estate Listings invites users to explore a curated selection of available properties, promising an array of appealing options for potential buyers <br />or renters. It conveys a sense of excitement and anticipation, encouraging visitors to embark on a journey through the diverse offerings of the real estate market</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
                {hotels.map(aHotels => <Card key={aHotels.id} hotels={aHotels} />)}
            </div>
            <About />
        </>
    );
};

export default Home;

