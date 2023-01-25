import React from 'react';
import s from './app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>ARMO TEST TASK</h1>
      <table className={s.table}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>access</th>
          <th>lastName</th>
          <th>birthDate</th>
        </tr>
        <tr>
          <td>1853</td>
          <td>Dimasik</td>
          <td>Lenin07-11-1917@bigreddit.ru</td>
          <td>true</td>
          <td>Ульянов</td>
          <td>22.04.1870</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
