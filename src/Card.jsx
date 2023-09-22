export default function Card({item}) {
  // console.log(item.title);
  const {coverImg : img, rating, reviewCount, title, price, country, openSpots} = item
  return (
    <div className="card">
      {!openSpots && <div className="card--badge">SOLD OUT</div>}
        <img
          src= {`./public/images/${img}`}
          alt="picture of a professional swimmer Katie Zaferes"
          className="card-image"
        />
      <div className="card-other-info">
            <img id="star-image" src=".\public\images\star.png" alt="an png image of a star" />
            <span id="the-rating">{rating}</span> 
            <span className="gray">({reviewCount})  •   </span>
            <span className="gray">{country}</span>
      </div>
            <p className="card--title" >{title}</p>
            <p id="gig-price"><span className="bold">From ${price}</span> / person</p>
    </div>
  );
}
