export default function Card() {
  return (
    <div className="the-card">
      <div className="the-card-img-div">
        <img
          src="\src\assets\katie-zaferes.png"
          alt="picture of a professional swimmer Katie Zaferes"
          className="card-image"
        />
        <p id="card-lable-sold-out">SOLD OUT</p>
      </div>
      <div className="card-other-info">
        <p className="vertical-align-middle">
            <img id="star-image" src="\src\assets\star.png" alt="an png image of a star" />
            <span id="the-rating">5.0</span> (6) •  USA
        </p>
        <p>Life lessons with Katie Zaferes</p>
        <p>
            <span id="gig-price">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
