import React from 'react';
import {Link} from 'react-router-dom'
import Menu from '../Components/Menu'
import Wrapper from '../Components/Wrapper'
import {FiArrowRight} from 'react-icons/fi'

import '../Styles/Pages/LandingPage.css'
import NuCell from '../Images/e15fdae704986353baa4578b5a50149a-pix-transfer@1x.png.webp'

const LandingPage: React.FC = () => {
  return (
    <div id="landing-page">
        <Menu />
        <Wrapper backgroundColor="#8a05be" className="landing-page-first">
            <div className="landing-page-first-container">
                <div className="landing-page-first-container-item-pix">
                  <h2>
                    Pix: um novo jeito de fazer transferências e pagamentos
                  </h2>
                  <Link to='/' id="landing-page-pix-info"><div className="landing-page-pix-info"><p>Saiba como funciona</p><FiArrowRight color="#FFF" size="24"/></div></Link>
                  <Link to='/' className="landing-page-first-container-item-button">Quero ser Nubank</Link>
                </div>
                <img src={NuCell} alt="Phone" className="landing-page-first-phone"/>
            </div>
        </Wrapper>
    </div>
  );
}

export default LandingPage;