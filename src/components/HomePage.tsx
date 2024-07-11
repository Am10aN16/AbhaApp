import React from 'react'
import Navbar from './Navbar'
import AbhaServices from './AbhaServices'
import OurServices from './OurServices'
import MultipleUseCard from './MultipleUseCard'
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.png';
import Diabetic from '../assets/diabetic.png';
import KnowMoreCard from './KnowMoreCard'
import { useNavigate } from 'react-router-dom'
import AdsCard from './AdsCard'
import Footer from './Footer'

const HomePage: React.FC =() => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };


  return (
    <>
    <Navbar/>
     <AbhaServices/>
     <OurServices/>
      <MultipleUseCard
        title="Login ABHA"
        paragraph="Access India's digital health ecosystem with your ABHA address."
        buttonText="Login Now"
        buttonOnClick={() => navigate('/create-abha-address')}
        imageUrl={Img1}
      />
      <KnowMoreCard
        title="Know more about ABHA"
        paragraph="Securly manage heath data and access India's digital health ecosystem easily"
        buttonText="Know More"
        buttonOnClick={handleButtonClick}
        imageUrl={Img2}
        />
      <AdsCard
        customTitle={<span><strong style={{color: 'red'}}>Free</strong> Consultation with <br/>Diabetologist</span>}
        customText={<span style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, padding: '16px' }}>Become Diabetes Free with Twin Health</span>}
        paragraph="21,000+ successful diabetes reversals"
        customButtonText={<span style={{ fontSize: 18, fontWeight: 600 }}>Know More</span>}
        buttonOnClick={handleButtonClick}
        imageUrl={Diabetic}
        />
    
      <MultipleUseCard
        title="Buy Health Insaurance"
        paragraph="Secure your health with ease! Purchase health insaurance directly from our trusted partners."
        buttonText="Know More"
        buttonOnClick={handleButtonClick}
        imageUrl={Img3}
      />
      <MultipleUseCard
        title="Ambula Coins"
        paragraph="Earn coins for creating ABHA, referring friends & more. Redeem them for exclusive benefits"
        buttonText="Start Earning"
        buttonOnClick={handleButtonClick}
        imageUrl={Img4}
      />
      <Footer/>
    </>
  )
}

export default HomePage