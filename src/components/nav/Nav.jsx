import "../nav/Nav.css";

export default function Nav()
{
    return (
        <div className="Nav">
            <section className="Firstsection">
                <img src="src/assets/Time.png" alt="" />
                <h6>Today 10:00 am - 7:00 pm</h6>
                <p>Working Hour's</p>
            </section>
                 
            <section className="Secondsection">
                 <img src="src/assets/Location.png" alt="" />
                 <h6>Ajah Lagos 🇳🇬 </h6>
                 <p>Get Direction</p>
            </section>

            <section className="Thirdsection">
                  <img src="src/assets/Phone.png" alt="" />
                  <h6>(+234) 806 344 3676</h6>
                  <p>Call Office</p>
            </section>
        </div>
    )
}