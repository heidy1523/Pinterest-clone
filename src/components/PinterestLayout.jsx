import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' tam='mtPeque'   image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio'  image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge'  image='https://picsum.photos//300/450'/>
      <PinCard size='small' tam='mtPeque'  image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio' image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge'  image='https://picsum.photos//300/450'/>
      <PinCard size='small' tam='mtPeque' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio'  image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge' image='https://picsum.photos//300/450'/>
      <PinCard size='small' tam='mtPeque' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio'  image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge' image='https://picsum.photos//300/450'/>
      <PinCard size='small' tam='mtPeque' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio'  image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge'  image='https://picsum.photos//300/450'/>
      <PinCard size='small' tam='mtPeque' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' tam='mtMedio' image='https://picsum.photos//300/450'/>
      <PinCard size='large' tam='mtLarge'  image='https://picsum.photos//300/450'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',

  },

};

export default PinterestLayout;
