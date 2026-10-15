import "../components/Page1_sec5.scss"
import { Hero } from "../Photos"
export default function Page1_sec5(){
    return(
        <>
            <section className="Page1_sec5">
                <div className="form">
                    <div className="wrap">
                        <div className="info">
                            <h2>Book an Appointment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                elit. Quisque placerat scelerisque tortor ornare ornare.<br/>
                                Convallis felis vitae tortor augue. Velit<br/>
                                nascetur proin massa in. Consequat faucibus<br/>
                                porttitor enim et.
                            </p>
                        </div>
                        <div className="grid">
                            <div className="row">
                                <div className="field">
                                    <p>Name</p>
                                </div>
                                <div className="line"></div>
                                <div className="field">
                                    <p>Gender</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field">
                                    <p>Email</p>
                                </div>
                                <div className="line"></div>
                                <div className="field">
                                    <p>Phone</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="field">
                                    <p>Date</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                                <div className="line"></div>
                                <div className="field">
                                    <p>Time</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field">
                                    <p>Doctor</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                                <div className="line"></div>
                                <div className="field">
                                    <p>Department</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="msg">
                                <p>Message</p>
                            </div>
                            <div className="btn">
                                <p>Submit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
