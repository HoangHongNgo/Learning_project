import "./Product.scss";
import pic1 from "../../assets/images/p1.jpg"
import pic2 from "../../assets/images/p2.jpg"
import pic3 from "../../assets/images/p3.jpg"
import pic4 from "../../assets/images/p4.jpg"
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    pic1,
    pic2,
    pic3,
    pic4,
];

function Product() {
    const [currentImg, setCurrentImg] = useState(pic2);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleClickPreview = () => {
        setIsOpen(true);
        let index = images.findIndex(item => item === currentImg);
        setPhotoIndex(index);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentImg} onClick={() => handleClickPreview()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small"><img src={pic1} onClick={() => setCurrentImg(pic1)} /></div>
                        <div className="img-small"><img src={pic2} onClick={() => setCurrentImg(pic2)} /></div>
                        <div className="img-small"><img src={pic3} onClick={() => setCurrentImg(pic3)} /></div>
                        <div className="img-small"><img src={pic4} onClick={() => setCurrentImg(pic4)} /></div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày Thể Thao Unisex FILA - BTS HERITAGE</div>
                    <div className="price">998.000 ₫</div>
                    <div className="size">Size: 30</div>
                    <div className="action">
                        <label className="quantity">Số lượng</label>
                        <input type="number" min={1} ></input>
                        <button className="buy">Chọn Mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    
                    onCloseRequest={() => this.setIsOpen(false)}
                // onMovePrevRequest={() =>
                //     this.setState({
                //         photoIndex: (photoIndex + images.length - 1) % images.length,
                //     })
                // }
                // onMoveNextRequest={() =>
                //     this.setState({
                //         photoIndex: (photoIndex + 1) % images.length,
                //     })
                // }
                />
            )}
        </div>
    );
}

export default Product;