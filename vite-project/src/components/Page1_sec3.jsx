import "../components/Page1_sec3.scss"
import { Hero } from "../Photos"
export default function Page1_sec3(){
    return(
        <>
            <section className="Page1_sec3">
                <div className="title">
                    <p>Care you can believe in</p>
                    <h2>Our Services</h2>
                </div>
                <div className="main">
                    <div className="side">
                        <div className="item">
                            <img src={Hero.Medi} alt="" />
                            <p>Free Checkup</p>
                        </div>
                        <div className="item">
                            <img src={Hero.Vec} alt="" />
                            <p>Cardiogram</p>
                        </div>
                        <div className="item">
                            <img src={Hero.Go} alt="" />
                            <p>Dna Testing</p>
                        </div>
                        <div className="item">
                            <img src={Hero.Cap} alt="" />
                            <p>Blood Bank</p>
                        </div>
                        <div className="item">
                            <p>View All</p>
                        </div>
                    </div>
                    <div className="body">
                        <h2>A passion for putting patients first.</h2>
                        <div className="lists">
                            <ul>
                                <li>A Passion for Healing</li>
                                <li>All our best</li>
                                <li>A Legacy of Excellence</li>
                            </ul>
                            <ul>
                                <li>5-Star Care</li>
                                <li>Believe in Us</li>
                                <li>Always Caring</li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Quisque placerat scelerisque tortor ornare ornare. Quisque<br/>
                            placerat scelerisque tortor ornare ornare Convallis felis<br/>
                            vitae tortor augue. Velit nascetur proin massa in.<br/>
                            Consequat faucibus porttitor enim et.
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Quisque placerat scelerisque. Convallis felis vitae tortor<br/>
                            augue. Velit nascetur proin massa in.
                        </h3>
                    </div>
                    <div className="images">
                        <img src={Hero.Biq} alt="" />
                        <img src={Hero.Grr} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
