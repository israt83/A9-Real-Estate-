

// const About = () => {
//     return (
//         <>
//             <div className="border-blue-900 text-center border-x-2 w-[800px] h-[400px] items-center my-10">
//                 <h1 className="text-4xl font-bold">About us</h1>
               

//             </div>
//         </>
//     );
// };

// export default About;
// const About = () => {
//     return (
//         <>
//             <div className="border border-blue-900 text-center mx-auto w-[1000px] h-[300px]  justify-center items-center my-10">
              
//                 <h1 className="text-4xl font-bold my-7">About us</h1>
             
//                 <p className=" border border-dashed w-[500px] ml-60 p-4  text-center text-[#706F6F] text-base font-semibold">You will find the latest information about us on this page. Our sites is constantly evolving and growing. We provide wide range of services. Our mission is to provide best solution that helps everyone.  If you want to contact us, please login the login page and fill the contact form on our contact section...</p>
            
               
//             </div>
//         </>
//     );
// };

// export default About;
import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'REALESTATE/ABOUT '; 
    }, [location.pathname]); 

    return (
        <>
            <div className="border border-blue-900 text-center mx-auto w-[1000px] h-[300px]  justify-center items-center my-10" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration='1000'>
                <h1 className="text-4xl font-bold my-7">About us</h1>
                <p className="border border-dashed w-[500px] ml-60 p-4  text-center text-[#706F6F] text-base font-semibold">You will find the latest information about us on this page. Our site is constantly evolving and growing. We provide a wide range of services. Our mission is to provide the best solution that helps everyone. If you want to contact us, please login to the login page and fill out the contact form on our contact section...</p>
            </div>
        </>
    );
};

export default About;