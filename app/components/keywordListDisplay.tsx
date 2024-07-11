import { IData } from "@/dummyData"

interface KeywordListDisplayProps {
  keywordData: IData | undefined
}

export function KeywordListDisplay({keywordData}: KeywordListDisplayProps): React.JSX.Element {

    if(!keywordData) return <div> No Data </div>
  return (
    <div className="flex flex-col">
        {
            Object.keys(keywordData).map((key,i)=>(
                <div key={i}>
                    {key + " : " + keywordData[key].join(", ")}
                </div>
            ))
        }
    </div>
  )
}