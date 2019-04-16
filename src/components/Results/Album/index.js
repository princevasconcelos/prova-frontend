import React from 'react';

import ListItem from '../shared';

import FavoriteImage from '../../FavoriteImage';
import Button from '../../Button';

const Album = ({
  result: { id, images, name },
  handleClick,
  favorites,
  favoriteHandler,
  canShowModal = false,
}) => (
  <ListItem type="box">
    {images.length > 0 && (
    <FavoriteImage
      favoriteHandler={() => favoriteHandler(id)}
      isActive={favorites.includes(id)}
      src={images[0].url}
      width="320"
      height="320"
      alt="Album Image"
    >
      {canShowModal && <Button onClick={() => handleClick(name)}>Ver músicas</Button>}
    </FavoriteImage>
    )}
  </ListItem>
);

export default Album;
