import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import logo from '../../img/favicon.png'
import 'swiper/css';
import 'swiper/css/pagination';
import './intro.css'


function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button className='btn' onClick={() => swiper.slideNext()}>Next slide</button>
  );
}

const Intro: React.FC = () => {

    return (
        <>
        <div className='pageWrapper'>
            <img className="logo" src={logo} alt="" />
        </div>
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> */}
        <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                <div className="slideWrapper">

                    <div className='btnWrap'>
                        <IonButton routerLink='/login' size="small">Login to my Account</IonButton>
                    </div>
                </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Intro;