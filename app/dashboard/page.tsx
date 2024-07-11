'use client'
// Default page for the dashboard
import {Graph} from '../components/graph';
import { KeywordList } from '../components/keywordlist';
import { Option, KeywordBar } from '../components/keywordBar';
import { useEffect, useState } from 'react';
import { dummyData, IData} from '../../dummyData'
import { KeywordListDisplay } from '../components/keywordListDisplay';

function loadDummyData(keywords : string[], index : number){
    // from each keyword get all values between 0 and index
    let result : IData  = {}
    for (let key in dummyData){
        if(!keywords.includes(key)) continue
        result[key] = dummyData[key].slice(0, index)
    }
    return result
}


export default function Dashboard() {
    // load in dummy data from ../data.json
    const [keywords, setKeywords] = useState<string[]>([])
    const [keywordData, setKeywordData] = useState<IData>({})
    const [monthState, setMonthState] = useState<number>(1)
    const [options, setOptions] = useState<Array<Option>>((Object.keys(dummyData).map((key, idx) => ({id: idx, name: key}))));

    useEffect(()=>{
        console.log(keywords)
        setKeywordData(loadDummyData(keywords, monthState))
    },[JSON.stringify(keywords), monthState])

    // get keys of dummy data with id 
      
    return (
        <div className='flex flex-col items-start justify-start h-screen w-screen'>
            <div className="flex flex-row h-2/3 w-full">
                <div className="flex items-center justify-center h-full w-3/4 bg-gray-500 ">
                    <Graph props={undefined}/>
                </div>
                <div className='flex flex-col justify-start items-center h-1/8 w-1/4'>
                    <div className="flex flex-row w-full h-1/10">
                        <div className='flex w-full h-full justify-start items-center '>
                            <KeywordBar options={options}  keywords={keywords}  setKeywords={setKeywords} setOptions={setOptions} />
                        </div>
                        <button className='w-3/10 h-full rounded-sm bg-green-400 p-2' onClick={()=>{
                            setMonthState(monthState + 1 )
                        }}> Next Month</button>
                    </div>
                    <div className=' text-white'>
                        <KeywordListDisplay  keywordData ={keywordData}/>
                    </div>
                </div>
            </div>
            <div className="flex h-1/3 w-full bg-red-500">
                <KeywordList props={undefined}/>
            </div>
        </div>
    )
}

