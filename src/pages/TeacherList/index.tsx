import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input type="text" name="subject" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">
              Dia da semana
              <input type="text" name="week_day" id="week_day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Hora
              <input type="text" name="time" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
