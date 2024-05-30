
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const hotels = useLoaderData();
    const { id } = useParams();
    const hotel = hotels.find(hotel => hotel.id === parseInt(id));

    if (!hotel) {
        return <div>Hotel not found!</div>;
    }

    return (
        <div className="container mx-auto mt-36 rounded-2xl hero min-h-screen bg-base-200 mb-14">
  <div className="hero-content flex-col lg:flex-row">
    <img src={hotel.image} className="w-[600px] h-[500px] rounded-lg shadow-2xl" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration='1000'/>
    <div data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration='1000'>
      <h1 className="text-5xl font-semibold text-blue-900">{hotel.estate_title}</h1>
      <p className="py-6 text-[#706F6F]">{hotel.description}</p>
      <h2 className='text-2xl font-bold my-2 text-[#706F6F] '>Segment name:{hotel.segment_name}</h2>
      <div className='flex space-x-8'>
      <h2 className='text-xl font-bold text-blue-900'><span className=''>Location:</span>{hotel.location}</h2>
      <h2 className='text-xl font-bold text-blue-900'>Area:{hotel.area}</h2>
      </div>
      <div className='flex space-x-2 mt-4'>
      <h2 className='text-base font-bold text-blue-900'><span className=''>Status:</span>{hotel.status}</h2>
      <h2 className='text-base font-bold text-blue-900'>{hotel.price}</h2>
      </div>
  
      
    </div>
  </div>
</div>
    );
};

export default Details;
