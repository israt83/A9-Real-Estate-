

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className="swiper-container pt-36" data-aos="fade-up" data-aos-duration="3000" style={{ margin: '0 50px', zIndex: 10 }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '20px',
                        zIndex: 10
                    }} className="mx-auto lg:h-[600px]">
                        <h2 className='text-xl lg:text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Esay Way to find a <br /><span>perfect Home</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '20px',
                        zIndex: 10
                    }} className="h-[600px]">
                        <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Esay Way to find a <br /> perfect Home </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=600)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '20px',
                        zIndex: 10
                    }} className="h-[600px]">
                        <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Esay Way to find a <br /> perfect Home </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
