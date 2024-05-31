

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'REALESTATE/ABOUT'; 
    }, [location.pathname]); 

    return (
        <>
            <div className="mt-32 border border-blue-900 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration='1000'>
                <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7">About us</h1>
                <p className="border border-dashed w-full lg:w-[500px] p-4 text-center text-[#706F6F] text-sm lg:text-base font-semibold">
                    You will find the latest information about us on this page. Our site is constantly evolving and growing. We provide a wide range of services. Our mission is to provide the best solution that helps everyone. If you want to contact us, please login to the login page and fill out the contact form on our contact section...
                </p>
            </div>
        </>
    );
};

export default About;
