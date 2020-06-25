import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 3
  },
  {
    id: 2,
    name: 'Kimchi2',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 5
  },
  {
    id: 3,
    name: 'Kimchi3',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 4
  },
  {
    id: 4,
    name: 'Kimchi4',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 3.3
  },
  {
    id: 5,
    name: 'Kimchi5',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 3.8
  },
  {
    id: 6,
    name: 'Kimchi6',
    Image: 'https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/026/550/original/IMG_2236s.jpg?2019&d=750x400',
    rating: 2
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.Image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
