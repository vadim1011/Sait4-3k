import "../components/Page1_sec6.scss"
import { Hero } from "../Photos"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
export default function Page1_sec6(){
    return(
        <>
            <section className="Page1_sec6">
                <div className="title">
                    <p>Trusted Care</p>
                    <h2>Our Doctors</h2>
                </div>
                <div className="slider">
                    <div className="wrap">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <img className="photo" src={Hero.Vrac} alt="" />
                                    <div className="info">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="icons">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="btn">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img className="photo" src={Hero.Vrac2} alt="" />
                                    <div className="info">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="icons">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="btn">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img className="photo" src={Hero.Vrac3} alt="" />
                                    <div className="info">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="icons">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="btn">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img className="photo" src={Hero.Vrac} alt="" />
                                    <div className="info">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="icons">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="btn">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img className="photo" src={Hero.Vrac2} alt="" />
                                    <div className="info">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="icons">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="btn">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
