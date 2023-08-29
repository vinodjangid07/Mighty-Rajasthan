import React from 'react';
import Slider from '../Components/Slider';
import TopMonuments from '../Components/TopMonuments';
export default function Home() {
  return (
    <>
    <Slider />
    <div className='AboutJaipur'>
      <h1>Know about Jaipur</h1>
      <p>Jaipur, known as the "Pink City," is a captivating blend of rich history, vibrant culture, and architectural marvels nestled in the heart of Rajasthan, India. Its iconic pink-hued buildings, adorned with intricate designs, evoke a sense of timeless elegance. The city's imposing forts, notably Amber Fort and Nahargarh Fort, stand as silent witnesses to its royal past, offering panoramic views of the landscape. Jaipur's bustling bazaars, like Johari Bazaar and Bapu Bazaar, beckon with a kaleidoscope of textiles, jewelry, and crafts. The City Palace exudes opulence with its fusion of Rajput, Mughal, and European architectural styles. Jaipur's festivals, like Diwali and Teej, burst with color, music, and traditions, truly embodying the essence of Rajasthan. <br /> <br />
      Nestled in the arid landscapes of Rajasthan, Jaipur, the "Pink City," is a symphony of history and modernity. Its rose-tinted facades pay homage to a bygone era, where every corner whispers tales of valiant Rajput rulers and opulent palaces. Amber Fort's grandeur and Hawa Mahal's delicate architecture stand as testaments to the city's regal heritage. Amidst the chaotic charm of markets like Chandpole Bazaar, artisans craft intricate jewelry and textiles. The City Palace flaunts an exquisite fusion of artistry. Jaipur's soul awakens during festivals, from the electrifying energy of the Gangaur Festival to the celestial beauty of the Diwali lights, all under the desert sky.</p>
    </div>
    <div className="AccommodationContainer">
        <h1 className='AccommodationHeading'>Accommodation</h1>
    </div>
    <TopMonuments/>
</>
  )
}
