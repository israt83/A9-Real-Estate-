
import { Link } from "react-router-dom";
import { SiGooglegemini } from "react-icons/si";

const Card = ({ hotels }) => {
    const { id, estate_title, image, description, status, price, facilities } = hotels;

    return (
        <div className="hover:animate-pulse relative">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:rotate-y-2">
                <div>
                    <div className="flex gap-2 justify-start px-8 py-4">
                        <SiGooglegemini className="mt-1" />
                        <button type="button" className="font-semibold rounded dark:border-gray-800 dark:text-gray-800">{status}</button>
                    </div>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" />
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up" data-aos-duration="2000">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{estate_title}</h2>
                    </div>
                    <p className="text-xl font-bold text-blue-900">{price}</p>
                    <div>
                        <h2 className="text-2xl font-bold">Facilities:</h2>
                        <ul>
                            {facilities.map((facility, index) => (
                                <li className="text-blue-900 text-base font-bold" key={index}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                    {
                        description.length > 50 ?
                            <p className="text-base text-[#706F6F] font-semibold">{description.slice(0, 100)} ...<br /><button className='btn btn-outline text-blue-900 w-full mt-3'><Link to={`/hotels/${id}`} className="text-gray-950 font-bold" data-aos="zoom-in"><span className="text-blue-900">View Property</span></Link></button></p> :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;

