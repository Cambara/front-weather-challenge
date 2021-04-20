import { ITableColumn, TableColumnSortEnum } from ".";

export const generateTableColumn = (label:string, code: string):ITableColumn => ({
  code,
  label
})

export const generateTableColumns = ():ITableColumn[] => {
  const columns = [
    { code: 'city', label: 'Cidade' },
    { code: 'temp', label: 'Temperatura Atual' },
    { code: 'tempMax', label: 'Temperatura Máxima' },
    { code: 'tempMin', label: 'Temperatura Mínima' },
    { code: 'sunrise', label: 'Nascer do Sol' },
    { code: 'sunset', label: 'Pôr do Sol' }
  ]

  return columns.map( column => generateTableColumn(column.label, column.code))
}

export const setSort = (sort?:TableColumnSortEnum):TableColumnSortEnum => {
  if (sort === TableColumnSortEnum.ASC) return TableColumnSortEnum.DESC
  return TableColumnSortEnum.ASC
}

export const ascSort = (code: string) => (a:any, b:any) => {
  if ( a[code] < b[code] ){
    return -1;
  }
  if ( a[code] > b[code] ){
    return 1;
  }
  return 0;
}

export const descSort = (code: string) => (a:any, b:any) => {
  if ( a[code] > b[code] ){
    return -1;
  }
  if ( a[code] < b[code] ){
    return 1;
  }
  return 0;
}