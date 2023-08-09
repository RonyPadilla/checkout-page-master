import "../style/checkot.css";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

const Checkot = () => {
  return (
    <>
      <section className="contact">
        <h1>Checkot</h1>
        <h2>Contact information</h2>

        <form action="#">
          <label>E-mail</label>
          <div className="input-contact">
            <BsFillEnvelopeFill className="icon-contact" />
            <input type="text" name="input" placeholder="Enter your email..." />
          </div>

          <label>Phone</label>
          <div className="input-contact">
            <BsFillTelephoneFill className="icon-contact" />
            <input type="text" name="input" placeholder="Enter your phone..." />
          </div>

          <h2>Shipping address</h2>

          <label>Full name</label>
          <div className="input-contact">
            <BsFillTelephoneFill className="icon-contact" />
            <input type="text" name="input" placeholder="Your name..." />
          </div>

          <label>Address</label>
          <div className="input-contact">
            <BsFillTelephoneFill className="icon-contact" />
            <input type="text" name="input" placeholder="Your address..." />
          </div>

          <label>City</label>
          <div className="input-contact">
            <BsFillTelephoneFill className="icon-contact" />
            <input type="text" name="input" placeholder="Your city..." />
          </div>

          <section className="div-country">
            <div>
              <label>Country</label>
              <div className="input-country">
                <BsFillTelephoneFill className="icon-contact" />
                <input type="text" name="input" placeholder="Your country..." />
              </div>
            </div>

            <div>
              <label>Postal code</label>
              <div className="input-country">
                <BsFillTelephoneFill className="icon-contact" />
                <input
                  type="text"
                  name="input"
                  placeholder="Your postal code..."
                />
              </div>
            </div>
          </section>
          <div>
            <input type="checkbox" /> 
          <label>Save this information for next time</label>
          </div>
          
          <button className="button-continue">Continue</button>
        </form>
      </section>
    </>
  );
};

export default Checkot;
