// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import { Card } from './Card'

export function Slider() {
    return (
        <div className="container">
            <div className="swiperContainer">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="pagination"></div>
        </div>
    )
}
