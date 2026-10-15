import "../components/Page1_sec8.scss"
import { Hero } from "../Photos"

export default function Page1_sec8(){
    return(
        <>
            <section className="Page1_sec8">
                <div className="title">
                    <p>Get in touch</p>
                    <h2>Contact</h2>
                </div>
                <div className="grid">
                    <div className="wrap">
                        <div className="item">
                            <img src={Hero.Phone} alt="" />
                            <h2>Emergency</h2>
                            <ul>
                                <li>(237) 681-812-255</li>
                                <li>(237) 666-331-894</li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={Hero.Toch} alt="" />
                            <h2>Location</h2>
                            <ul>
                                <li>0123 Some place</li>
                                <li>9876 Some country</li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={Hero.Email} alt="" />
                            <h2>Email</h2>
                            <ul>
                                <li>fildineeesoe@gmil.com</li>
                                <li>myebstudios@gmail.com</li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={Hero.Time} alt="" />
                            <h2>Emergency</h2>
                            <ul>
                                <li>Working Hours</li>
                                <li>Sunday Emergency only</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
