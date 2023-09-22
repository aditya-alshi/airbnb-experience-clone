import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import cardData from '../data';


export default function App(){
  const cards = cardData.map(item => {
    return <Card 
                key={item.id}
                item={item}

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