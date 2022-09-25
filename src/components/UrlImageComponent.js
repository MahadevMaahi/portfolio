import React, { useState } from 'react';
import { CardImg, Spinner } from 'reactstrap';
import axios from 'axios';

const UrlImageComponent = ({url=""}) => {

    const [imageData, setImageData] = useState({});
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const getImageFromUrl = () => {
        axios.get(url, {
            responseType: 'blob'
          }).then((res) => {
            setImageData(res);
            setIsImageLoaded(true);
        });
    }

    if(isImageLoaded) {
        return(<CardImg src={URL.createObjectURL(imageData.data)} className="img-fluid img-responsive rounded-rectangle" alt='MY PHOTO'/>);
    } else {
        getImageFromUrl();
        return(<Spinner className='summary-spinner'/>);
    }
}

export default UrlImageComponent;