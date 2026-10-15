import "../components/Page1_sec2.scss"
import { Hero } from "../Photos"
export default function Page1_sec2(){
    return(
        <>
            <section className="Page1_sec2">
                <div className="info">
                    <p>Welcome to Meddical</p>
                    <h2>A Great Place to Receive Care</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br/>
                        scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br/>
                        proin massa in. Consequat faucibus porttitor enim et.
                    </h3>
                    <div className="more">
                        <p>Learn More</p>
                        <img src={Hero.Strv} alt="" />
                    </div>
                </div>
                <div className="image">
                    <img src={Hero.Gru} alt="" />
                </div>
            </section>
        </>
    )
}
