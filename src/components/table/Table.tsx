import React, {useEffect, useState} from 'react';
import s from "./table.module.scss";
import {useGetTableDataQuery} from "../../redux/api/tableApi";
import {TableDTO} from "../../types/tableDTO";
import Pagination from "../pagination/Pagination";
import spinner from '../../assets/gif/spiner.gif'
import TableRow from "../tableRow/TableRow";
import TableHeader from "../tableHeader/tableHeader";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setData} from "../../redux/slice/tableSlice";
import TableEditRow from "../tableEditRow/TableEditRow";

function Table() {
  const {data, isLoading} = useGetTableDataQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.table.data)

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentRows = state?.slice(firstRowIndex, lastRowIndex);

  useEffect(() => {
    if (Array.isArray(data)) {
      dispatch(setData(data));
    }
  }, [data])

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber)

  const tableHeaders: { key: keyof TableDTO, name: string }[] = [
    {key: 'id', name: 'id'},
    {key: 'name', name: 'name'},
    {key: 'email', name: 'email'},
    {key: 'access', name: 'access'},
    {key: 'lastName', name: 'lastName'},
    {key: 'birthDate', name: 'birthDate'},
  ]

  return (
    <>
      {isLoading ?
        <div className={s.spiner}>
          <img src={spinner} alt="spiner"/>
        </div>
        :
        <table className={s.table}>
          <thead>
          <tr>
            {tableHeaders.map(({key, name}) => (
                <TableHeader key={key} headerName={name} headerKey={key}/>
              )
            )}
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            currentRows?.map(({id, name, email, access, lastName, birthDate}, i) => (
                <tr key={id + name}>
                  <TableRow value={id} rowInd={i} header={'id'}/>
                  <TableRow value={name} rowInd={i} header={'name'}/>
                  <TableRow value={email} rowInd={i} header={'email'}/>
                  <TableRow value={Number(access)} rowInd={i} header={'access'}/>
                  <TableRow value={lastName} rowInd={i} header={'lastName'}/>
                  <TableRow value={birthDate} rowInd={i} header={'birthDate'}/>
                  <TableEditRow id={id} rowInd={i}/>
                </tr>
              )
            )
          }
          </tbody>
        </table>
      }
      <Pagination rowsPerPage={rowsPerPage} totalRows={state.length} paginate={paginate} currentPage={currentPage}/>
    </>
  );
}

export default Table;
