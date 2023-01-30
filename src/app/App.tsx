import React from 'react';
import s from './app.module.scss';
import Table from "../components/table/Table";

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>ARMO TEST TASK</h1>
      <Table/>
    </div>
  );
}

export default App;
