import Checkot from "./Checkot.jsx";
import { Products } from "./Products.jsx";
import '../style/content.css';

const Content = () => {
  return (
    <>
      <section className="content">
        <Checkot className="checkot" />
        <Products className="products"/>
      </section>
    </>
  );
};

export default Content;
