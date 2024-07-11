'use client'

import { IData } from "@/dummyData"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import classNames from "classnames";

interface KeywordListDisplayProps {
  keywordData: IData 
}

export default function KeywordListDisplay({keywordData}: KeywordListDisplayProps): React.JSX.Element {
  if(Object.keys(keywordData).length === 0 ) return <div> No Data </div>
  
  const length = keywordData[Object.keys(keywordData)[0]].length
  return (
    <Table >
      <TableHeader>
        <TableColumn>Keyword</TableColumn>
        <TableColumn>Previous</TableColumn>
        <TableColumn>Current</TableColumn>
        <TableColumn>Percentage Change</TableColumn>
      </TableHeader>
      <TableBody>
        {Object.keys(keywordData).map((key) => {

          const keyword = keywordData[key]
          const percentage = ((keyword[length- 1] -keyword[length- 2]) / keyword[length- 2] * 100)

          return (
            <TableRow  key={key}>
              <TableCell className="text-black	" >{key}</TableCell>
              <TableCell className="text-black	">{keyword[length- 2]}</TableCell>
              <TableCell className="text-black	">{keyword[length- 1]}</TableCell>
              <TableCell className={classNames("text-black", {'bg-red-400' : percentage < 0 }, {'bg-green-200' : percentage >0})} > {percentage.toFixed(2)}%</TableCell>

            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
}
