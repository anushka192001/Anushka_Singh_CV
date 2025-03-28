import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Extra-Curriculars(some song covers)</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/barfi.png'
              text='main kya karoon'
              label='cover'
              path='https://www.youtube.com/watch?v=R-FOBdK7lv0'
            />
            <CardItem
              src='images/kabhi_kabhi_aditi.png'
              text='kabhi kabhi aditi'
              label='cover'
              path='https://www.youtube.com/watch?v=HF3NNdW5fR4'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/muskanein_jhooti_hai.png'
              text='muskanein jhoothi hain'
              label='cover'
              path='https://www.youtube.com/watch?v=VTsF0Z-d0Mc'
            />
            <CardItem
              src='images/tera_ghata.png'
              text='tera ghata'
              label='cover'
              path='https://www.youtube.com/watch?v=W7AFSHwbjNs'
            />
            <CardItem
              src='images/tere_bina.png'
              text='tere bina'
              label='cover'
              path='https://www.youtube.com/watch?v=8WBFzH01qYQ'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
