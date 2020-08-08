import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import connectionsService from '../../services/connections.service';

function Landing() {
  const [totalConections, setTotalConnections] = useState(0);

  useEffect(() => {
    connectionsService.getTotal().then((resp) => {
      const { total } = resp;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Marca d'água Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Logo landing page: pessoas desenhadas com notebooks e celulares"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={stydyIcon} alt="Livro aberto" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="aparelho de tv" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Ícone de Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
