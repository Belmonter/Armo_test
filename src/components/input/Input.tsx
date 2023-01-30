import React, {PropsWithChildren, useState} from 'react';
import {TableDTO} from "../../types/tableDTO";
import s from './input.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {TableInputs} from "../../redux/slice/tableInputsSlice";
import {setData} from "../../redux/slice/tableSlice";
import pencil from "../../assets/png/pencil.svg";
import submit from "../../assets/png/submit.png";

interface Input {
  value: string | number,
  rowInd: number,
  header: keyof TableDTO | keyof TableInputs,
}

function Input({value, rowInd, header}: PropsWithChildren<Input>) {
  const [inpValue, setInputValue] = useState(value);
  const [edit, setEdit] = useState(true);

  const state = useAppSelector(state => state.table.data)
  const dispatch = useAppDispatch();
  const stateInputs = useAppSelector(state => state.tableInputs)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const onPencilClick = (): void => {
    setEdit(edit => !edit)
  }

  const onSubmitClick = (): void => {
    const result = state.map((el, i) => {
      if (i === rowInd) {
        return {...el, [header]: inpValue}
      } else {
        return {...el}
      }
    })
    dispatch(setData(result))
  }

  return (
    <>
      <input className={`${s.input}`} disabled={edit} type="text" value={inpValue} onInput={onChange}/>
      {edit ?
        <img src={pencil} alt="pencil" onClick={onPencilClick}/>
        :
        <img src={submit} alt="submit" onClick={onSubmitClick}/>
      }
    </>
  );
}

export default Input;
