import React, {useState} from 'react';
import s from './tableEditRow.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {TableInputs} from "../../redux/slice/tableInputsSlice";

type RowId = string | number | keyof TableInputs;

interface TableEditRowProps {
  id: RowId,
  rowInd: number,
}

function TableEditRow({id, rowInd}: TableEditRowProps) {
  const [edit, setEdit] = useState(false)
  const dispatch = useAppDispatch();
  const stateInputs = useAppSelector(state => state.tableInputs);

  const onRowEdit = (rowInd: number) => {
    setEdit(edit => !edit)
  }

  return (
    <td>
      <div className={s.edit}>
        {edit ?
          <button>submit</button>
          :
          <>
            <button className={s.delete}>delete</button>
          </>
        }
      </div>
    </td>
  );
}

export default TableEditRow;
