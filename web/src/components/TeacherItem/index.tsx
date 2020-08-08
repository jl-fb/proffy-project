import React from 'react';

import whatsapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import connectionsService from '../../services/connections.service';
export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherProps {
  teacher: Teacher;
}
const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  const createNewConnection = async () => {
    try {
      connectionsService.setConnection(teacher.id).then((resp) => {
        console.log(resp);
      });
    } catch (error) {
      alert(`Ocorreu um erro com o sevidor: ${error}`);
    }
  };
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.avatar} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço por hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsapIcon} alt="Ícone whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
