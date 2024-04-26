import '../howitWorks/Works.css';



export default function Work()
{
    return(
        <div className="work">
            <h5>How it works</h5>
            <pre>"Exercise is king, nutrition is Queen, put them together, and you've got a kingdom."</pre>
            <div className="HowWork">
                 <section className="Firstsection">
                <img src="src/assets/Chicken.png" alt="" />
                <h6>Pick Meal</h6>
                <p>Your diet is a bank account. Good food choices are good investment.</p>
            </section>
                 
            <section className="Secondsection">
                 <img src="src/assets/Hand.png" alt="" />
                 <h6>Choose How Often </h6>
                 <p>Life is uncertain. Eat your favorite meal first.</p>
            </section>

            <section className="Thirdsection">
                  <img src="src/assets/Truck.png" alt="" />
                  <h6>Fast Delivery</h6>
                  <p>Delivering Happiness 
                    || We Deliver Worldwide || Always on Time || Directly To your Door Step.
                  </p>
            </section>
               </div>
        </div>
    )
}