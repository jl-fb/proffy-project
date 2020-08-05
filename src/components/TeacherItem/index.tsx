import React from 'react';

import whatsapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://miro.medium.com/max/500/1*vmFSpk9xtpxAHkH7cmt-3Q.png"
        alt="Joao"
      />
      <div>
        <strong>Nome Professor</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /> <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das
      pessoas através de experiências. Mais de 200.000 pessoas já passaram por
      uma das minhas explosões.
    </p>
    <footer>
      <p>
        Preço por hora
        <strong>R$ 80,00</strong>
      </p>
      <button>
        <img src={whatsapIcon} alt="Ícone whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
