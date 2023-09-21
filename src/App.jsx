import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import cardData from '../data';


export default function App(){
  const cards = cardData.map(item => {
    return <Card 
                img = {`/public/${item.coverImg}`}
                rating= {item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country= {item.location}
                title={item.title}
                price={item.price}

  />})
  return(
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
    
  );
}