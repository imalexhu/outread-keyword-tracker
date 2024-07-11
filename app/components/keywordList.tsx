import { IData } from "@/dummyData"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import classNames from "classnames";

interface KeywordListProps {
  keywordData : IData 
}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function KeywordList({keywordData}: KeywordListProps): React.JSX.Element {
  if(Object.keys(keywordData).length === 0 ) return <div> No Data </div>
  
  const length = keywordData[Object.keys(keywordData)[0]].length
  const temp = ["keyword"]
  for(let i = 0; i < length; i++){
    temp.push(month[i])
  }

  const columns = temp.map((key) => ({key: key, label: key.toUpperCase()}))

  const rows = Object.keys(keywordData).map((key,_i) => {
    const keyword = keywordData[key]
    const obj: {[key: string]: string} = {key: key}
    for(let i = 0; i < length; i++){
      obj[month[i]] = keyword[i].toString()
    }
    return obj
  })

  console.log(rows)

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className={classNames("text-black")}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
