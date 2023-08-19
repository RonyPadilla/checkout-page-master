import "../style/checkot.css";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillHouseDoorFill, BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { ImEarth } from "react-icons/im";
import { MdMarkunreadMailbox } from "react-icons/md";

const Checkot = () => {
  return (
    <>
      <section className="contact">
        <h2 className="text-contact-info">Contact information</h2>

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
            <BiSolidUserCircle style={ {fontSize: '25px'}} className="icon-contact" />
            <input type="text" name="input" placeholder="Your name..." />
          </div>

          <label>Address</label>
          <div className="input-contact">
            <BsFillHouseDoorFill style={ {fontSize: '25px'}} className="icon-contact" />
            <input type="text" name="input" placeholder="Your address..." />
          </div>

          <label>City</label>
          <div className="input-contact">
            <BsFillBuildingsFill className="icon-contact" />
            <input type="text" name="input" placeholder="Your city..." />
          </div>

          <section className="div-country">
            <div>
              <label>Country</label>
              <div className="input-country">
                <ImEarth style={ {fontSize: '25px'}} className="icon-contact" />
                <input type="text" name="input" placeholder="Your country..." />
              </div>
            </div>

            <div>
              <label>Postal code</label>
              <div className="input-country">
                <MdMarkunreadMailbox style={ {fontSize: '25px'}} className="icon-contact" />
                <input
                  type="text"
                  name="input"
                  placeholder="Your postal code..."
                />
              </div>
            </div>
          </section>
            <div style={{marginTop: '35px'}}>
            <input type="checkbox"  style={ {transform: 'scale(1.6)',marginLeft: '5px', marginRight: '10px'}}/> 
            <label>Save this information for next time</label>
          </div>
          
          <button className="button-continue">Continue</button>
          
        </form>
      </section>
    </>
  );
};

export default Checkot;
