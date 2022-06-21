import "swiper/scss";
import "swiper/scss/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import {Link} from "react-router-dom";
import "./Banner.scss"
import {useState} from "react";

SwiperCore.use([Navigation, Autoplay]);

export default function Banner(props) {

    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className="main-banner">
            <Swiper
                className="main-banner"
                slidesPerView={1}
                navigation
                loop
                autoplay={{delay: 4000}}
                onActiveIndexChange={i => setActiveIndex(i.realIndex)}
            >
                {props.banner.map(b => (
                    <SwiperSlide>
                        <Link to="">
                            <img className="main-banner--image" src={b.img} alt="banner"/>
                        </Link>
                    </SwiperSlide>
                ))

                }
                <div className="main-banner--active-index-position-helper">
                    <div className="main-banner--active-index">
                        {activeIndex + 1} / {props.banner.length}
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
