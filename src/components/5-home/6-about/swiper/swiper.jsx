// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { clientComments } from '../../../../constants';

const Slider = () => {
  return (
        <Swiper className="mySwiper"
            slidesPerView={1}
            modules={[Pagination, Autoplay]} 
            loop={true}
            speed={1000}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                }
            }}
        >
        {clientComments.map((item, idx)=>{
            return (<SwiperSlide key={idx}>
                <img src={item.pic} alt={`${idx}`} />
                <p className='description'>{item.comment}</p>
            </SwiperSlide>)
        })}
        </Swiper>
  )
}

export default Slider

