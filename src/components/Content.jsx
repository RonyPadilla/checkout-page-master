import Checkot from "./Checkot.jsx";
import { Products } from "./Products.jsx";
import '../style/content.css';

const Content = () => {
  return (
    <>
      <section className="content">
        <Checkot />
        <Products />
      </section>
    </>
  );
};

export default Content;
