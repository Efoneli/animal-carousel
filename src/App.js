import React, { useEffect, useState } from'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import Image from './components/Image';



function App() {

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 },
  // }
  
  // const items = () => {
  //   const items = [];
  //   for (let i = 0; i < responsive.0.items; i++) {
  //     items.push(
  //       <div className="item" key={i}>
  //         <div className="item-image"></div>
  // }

  // const items = () => {
  //   Axios.get
  
  const [images, setImages] = useState([]);
  
  const fetchAPI = async() => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=jtFqNdHC7BEtYuo2KYzvVVBfNtMgcIfOGqL90AuxPnU');
    console.log(response.data);
    const data = await response.data;
    setImages(data);
    
  }

  return (
    <div className='container max-w-full h-screen bg-red-100'>
      <div>
        <h1 className='font-bold text-3xl place-items-center grid text-blue-300'>This is an animal carousel</h1>
      </div>
      {/* <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        /> */}
        <div>
          <button onClick={fetchAPI} className='bg-red-600'>search here</button>
        </div>
        <div className='flex'>
          {images.length > 0 &&(
            <Image images = {images} />
          )}
        </div>
    </div>
  );
}

export default App;
