import './FooterStyle.css';
import insta from'./../../assets/instagram.png'
import twitter from './../../assets/twitter.png'
import facebook from './../../assets/facebook.png'
import linked from './../../assets/linkedin.png'
import telegram from './../../assets/telegram.png'
import pinterest from'./../../assets/pinterest.png'
import dribbble from'./../../assets/dribbble.png'
import img1 from'./../../assets/img1.webp'
import img2 from'./../../assets/img2.jpeg'
import img3 from'./../../assets/img3.webp'
import img4 from'./../../assets/img4.jpeg'
import img5 from'./../../assets/img5.webp'
import img6 from'./../../assets/img6.jpeg'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
 
 
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

 
  return (
    <div className='footer'>

<div className="topFooter">
<div className='about'>
      <h2>About Us</h2>
    <p>
    Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.
    </p>

    <h2>Connect</h2>
    <div className="socials" data-aos="zoom-in" data-aos-delay="1000">
   <div data-aos="zoom-in" data-aos-delay="400"> <img src={insta} alt='socials'/></div> 
   <div data-aos="zoom-in" data-aos-delay="800"> <img src={twitter} alt='socials'/></div> 
   <div data-aos="zoom-in" data-aos-delay="1100"> <img src={facebook} alt='socials'/></div> 
   <div data-aos="zoom-in" data-aos-delay="1600"> <img src={linked} alt='socials'/></div> 
   <div   data-aos="zoom-in" data-aos-delay="1900">  <img src={telegram} alt='socials'/></div> 
   
   <div  data-aos="zoom-in" data-aos-delay="2200"> <img src={pinterest} alt='socials'/></div>
   <div  data-aos="zoom-in" data-aos-delay="2700"> <img src={dribbble} alt='socials'/></div> 
    </div>
  </div>
<div className='AllProjects' data-aos="zoom-in" data-aos-delay="2000">
<h2>Projects</h2>
<div className="projects">
  <span>Web Design</span>
  <span>HTML5</span>
  <span>CSS3</span>
  <span>jQuery</span>
  <span>Bootstrap</span>
</div>
</div>
<div className='Gallery' >
<h2>Gallery</h2>
<div className="grid-gallery">
  <div className='item' data-aos="zoom-in" data-aos-delay="400"><img src={img1}alt='Gallery'/></div>
  <div className='item' data-aos="zoom-in" data-aos-delay="700"><img src={img2}alt='Gallery'/></div>
  <div className='item' data-aos="zoom-in" data-aos-delay="1000"><img src={img3}alt='Gallery'/></div>
  <div className='item' data-aos="zoom-in" data-aos-delay="1300"><img src={img4}alt='Gallery'/></div>
  <div className='item' data-aos="zoom-in" data-aos-delay="1600"><img src={img5}alt='Gallery'/></div>
  <div className='item' data-aos="zoom-in" data-aos-delay="1900"><img src={img6}alt='Gallery'/></div>
</div>

</div>

<div className="contact" data-aos="zoom-in" data-aos-delay="4000">
  <h2>Contact</h2>
  <div className="location">43 Raymouth Rd. Baltermoer, London 3910</div>
  <div className="connect">
    <h3>+1(123)-456-7890</h3>
    <h3>+1(123)-456-7890</h3>
    <h3>info@mydomain.com</h3>
  </div>
</div>
</div>

   <div className='end_footer' >Copyright @2023. All Rights Reserved. Designed with love by <h4>Ali Hamz Mohammad</h4>.</div>

    </div>


  )
}

export default Footer