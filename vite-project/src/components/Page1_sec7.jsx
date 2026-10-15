import { Hero } from "../Photos"
import "../components/Page1_sec7.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export default function Page1_sec7(){
    return(
        <>
            <section className="Page1_sec7">
                <div className="title">
                    <p>Better information, Better health</p>
                    <h2>News</h2>
                </div>
                <div className="slider">
                    <div className="wrap">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="group">
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="group">
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="group">
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="group">
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="group">
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Hero.Shoc} alt="" />
                                        <div className="content">
                                            <p>Monday 05, September 2021 | By Author</p>
                                            <h3>This Article’s Title goes Here, <br/>
                                                but not too long.
                                            </h3>
                                            <img src={Hero.Nab} alt="" />
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
