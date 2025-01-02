import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);

  const removePlace = (id) => {
    let newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  return (<div>
    <div className="bg-image"></div>

    <div className='container'>
      <h1>TOP {places.length} places in Canada worth visiting!</h1>
    </div>
    {places.map((item => {
      const {id, place, description, image, source, showMore} = item;
      return(
        <div key={id}>
          <div className='container'>
            <h2>{id} - {place}</h2>
          </div>
          <div className='container'>
            <p>{showMore ? description : description.substring(0, 350) + '....'}
              <button onClick={() => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
            </p>
          </div>
          <div className='container'>
            <img src={image} width='700px' alt='Places in Canada'/>
          </div>
          <div className='container'>
            <p>{source}</p>
          </div>
          <div className='container'>
            <button className='btn' onClick={() => removePlace(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
  </div>);
}

export default App;
