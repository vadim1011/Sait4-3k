import { Hero } from "../Photos"
import "../components/Page1_sec1.scss"
export default function Page1_sec1(){
    return(
        <>
            <section className="Page1_sec1">
                <div className="main">
                    <div className="content">
                        <p>Caring for Life</p>
                        <h1>Leading the Way<br/>
                            in Medical Excellence
                        </h1>
                        <button>Our Services</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="grid">
                        <div className="item">
                            <p>Book an Appointment</p>
                            <img src={Hero.Calen} alt="" />
                        </div>
                        <div className="item">
                            <p>Book an Appointment</p>
                            <img src={Hero.Team} alt="" />
                        </div>
                        <div className="item">
                            <p>Book an Appointment</p>
                            <img src={Hero.Cash} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
