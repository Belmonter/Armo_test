import React, {useState} from 'react';
import s from './tableRow.module.scss'
import Input from "../input/Input";
import {TableDTO} from "../../types/tableDTO";

interface TableProps {
  value: string | number
  rowInd: number,
  header: keyof TableDTO
}


function TableRow({value, rowInd, header}: TableProps) {
  return (
    <td>
      <div className={s.row}>
        <Input value={value} rowInd={rowInd} header={header}/>
      </div>
    </td>
  );
}

export default TableRow;
