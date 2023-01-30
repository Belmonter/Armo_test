import React, {useEffect, useState} from 'react';
import {TableDTO} from "../../types/tableDTO";
import s from './tableHeader.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setData} from "../../redux/slice/tableSlice";

interface TableHeaderProps {
  headerName: string,
  headerKey: keyof TableDTO,
}

function TableHeader({headerName, headerKey}: TableHeaderProps) {
  const [order, setOrder] = useState('ASC');

  const state = useAppSelector(state => state.table.data)
  const dispatch = useAppDispatch();

  const sortDate = (date: string): number[] => {
    if (date.includes('.')) {
      const [year, month, day] = date.split('.').reverse();
      return [parseInt(year), parseInt(month), parseInt(day)]
    }
    if (date.includes('/')) {
      const [year, month, day] = date.split('/').reverse();
      return [parseInt(year), parseInt(month), parseInt(day)]
    }
    if (date.includes('-')) {
      const [year, month, day] = date.split('-').reverse();
      return [parseInt(year), parseInt(month), parseInt(day)]
    }

    return [];
  }

  const sortRowView = (order: string, col: string) => {
    if (col === 'birthDate') {
      return [...state]?.sort((a, b) => {
        const [firstYear, firstMonth, firstDay] = sortDate(String(a[col]))
        const [secondYear, secondMonth, secondDay] = sortDate(String(b[col]))
        if (order === 'ASC') {
          setOrder('DESC')
          // return Date.parse(a[col]) - Date.parse(b[col])
          return new Date(firstYear, firstMonth, firstDay) > new Date(secondYear, secondMonth, secondDay) ? 1 : -1
        } else {
          setOrder('ASC')

          // return Date.parse(b[col]) - Date.parse(a[col])
          return new Date(firstYear, firstMonth, firstDay) < new Date(secondYear, secondMonth, secondDay) ? 1 : -1
        }
      })
    } else if (col === 'id') {
      return [...state]?.sort((a, b) => {
        if (Number(a[col] && Number(b[col]))) {
          if (order === 'ASC') {
            setOrder('DESC')
            return Number(a[col]) - Number(b[col])
          } else {
            setOrder('ASC')
            return Number(b[col]) - Number(a[col])
          }
        } else if (!Number(a[col] && !Number(b[col]))) {
          if (order === 'ASC') {
            setOrder('DESC')
            return a[col] > b[col] ? 1 : -1
          } else {
            setOrder('ASC')
            return a[col] < b[col] ? 1 : -1
          }
        } else {
          return -1
        }
      })
    } else if (col === 'name' || col === 'email' || col === 'lastName') {
      if (order === 'ASC') {
        setOrder('DESC')
        return [...state].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
      } else {
        setOrder('ASC')
        return [...state].sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
      }
    } else if (col === 'access') {
      if (order === 'ASC') {
        setOrder('DESC')
        return [...state].sort((a, b) => a[col] < b[col] ? 1 : -1)
      } else {
        setOrder('ASC')
        return [...state].sort((a, b) => a[col] > b[col] ? 1 : -1)
      }
    } else {
      return state
    }
  }

  const sortRow = (col: keyof TableDTO) => {
    let sorted: TableDTO[] = sortRowView(order, col);
    if (sorted.length > 0) dispatch(setData(sorted ? sorted : []))
  }


  return (
    <th onClick={() => sortRow(headerKey)}>
      <div className={s.row}>
        <span>{headerName}</span>
        <span className={order === 'ASC' ? s.icon : s.icon__rev}>▲</span>
      </div>
    </th>
  );
}

export default TableHeader;
