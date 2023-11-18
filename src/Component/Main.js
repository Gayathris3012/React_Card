import ImageCard from "../Component/ImageCard";
import NewDelhi from "../images/img1.jpg";
import Thailand from "../images/img2.jpg";
import Greece from "../images/image3.jpg";

function Main() {
  return (
    <section className="container my-5 card-section">
      <div className="row g-3">
        <div className="col-md-4 col-xl-3">
          <ImageCard
            src={NewDelhi}
            alt="New Delhi"
            title="New Delhi"
            desc="India Gate New Delhi"
            isFirst
          />
        </div>
        <div className="col-md-4 col-xl-3">
          <ImageCard
            src={Thailand}
            alt="Thailand"
            title="Thailand"
            desc="Scenic aerial view of two boats on sea near Koh Phi Phi, Thailand"
          />
        </div>
        <div className="col-md-4 col-xl-3">
          <ImageCard
            src={Greece}
            alt="Greece"
            title="Greece"
            desc="Church in Oia (Santorini, Greece)."
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
