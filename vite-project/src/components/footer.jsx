import "../components/footer.scss"
import { Hero } from "../Photos"
export default function Footer(){
    return(
        <>
            <section className="Footer">
                <div className="top">
                    <div className="wrap">
                        <div className="logo">
                            <h2>Meddical</h2>
                            <p>Leading the Way in Medical<br/>
                                Execellence, Trusted Care.
                            </p>
                        </div>
                        <div className="links">
                            <h2>Important Links</h2>
                            <ul>
                                <li>Appointment</li>
                                <li>Doctors</li>
                                <li>Services</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="links">
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Call: (237) 681-812-255</li>
                                <li>Email: fildineesoe@gmail.com</li>
                                <li>Address: 0123 Some place</li>
                                <li>Some country</li>
                            </ul>
                        </div>
                        <div className="sub">
                            <h2>Newsletter</h2>
                            <button>
                                <p>Enter your email address</p>
                                <img src={Hero.Setr} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <div className="info">
                        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                        <div className="icons">
                            <img src={Hero.Inn2} alt="" />
                            <img src={Hero.Ff2} alt="" />
                            <img src={Hero.Insts2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
