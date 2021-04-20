import React, { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IWeather } from "../../services/weatherApi/weatherModel";
import { ascSort, descSort, generateTableColumns, setSort } from "./helper";
import { Table, TBody, THead } from "./style";
import WeatherRow from "./WeatherRow";

interface IProp {
  cityWeathers: IWeather[]
}

export enum TableColumnSortEnum {
  ASC = 'asc',
  DESC = 'desc'
}

export interface ITableColumn {
  code: string,
  label: string,
  sort?: TableColumnSortEnum
}


const WeatherTable: React.FC<IProp> = ({ cityWeathers }) => {
  const [tableColumns, setTableColumns] = useState<ITableColumn[]>(generateTableColumns());
  const [tableLines, setTableLines] = useState<IWeather[]>([...cityWeathers]);

  const sortColumn = (column:ITableColumn) => {
    column.sort = setSort(column.sort)
    
    const data = [...tableLines]

    if(column.sort === TableColumnSortEnum.ASC) data.sort(ascSort(column.code))
    else data.sort(descSort(column.code))
    
    const newTableColumns = tableColumns.map( tableColumn => {
      if(tableColumn.code !== column.code) tableColumn.sort = undefined
      return tableColumn
    } )
    setTableColumns(newTableColumns)
    setTableLines(data)
  }

  useEffect(() => {
    setTableColumns(generateTableColumns())
    setTableLines([...cityWeathers])
  }, [cityWeathers])

  return (
    <Table cellSpacing="0" cellPadding="0">
      <THead>
        <tr>
          {tableColumns.map(tableColumn => {
            return (
              <th key={tableColumn.code} onClick={() => sortColumn(tableColumn)}>
                {tableColumn.label} {tableColumn.sort ? tableColumn.sort === TableColumnSortEnum.ASC ? <FaCaretUp /> : <FaCaretDown /> : undefined}
              </th>);
          })}
        </tr>
      </THead>
      <TBody>
        {tableLines.map( weather => <WeatherRow weather={weather} key={weather.city} />)}
      </TBody>
    </Table>
  );
};

export default WeatherTable;
