'use client'


import React, { Dispatch, SetStateAction } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export interface Option {
    id : number,
    name : string
}


interface Props {
    options : Array<Option>
    keywords: string[]; // Add the 'keywords' property
    setKeywords: Dispatch<SetStateAction<string[]>>;
    setOptions: Dispatch<SetStateAction<Array<Option>>>;
}


export function KeywordBar({options, keywords, setKeywords,setOptions} : Props): React.JSX.Element {
  // note: the id field is mandatory
  const formatResult = (item : Option) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  const handleSelect = () => (item : Option) => {
    const temp = keywords
    temp.push(item.name)
    setKeywords(temp)
    setOptions(options.filter((option) => option.name !== keywords[keywords.length - 1]))
  }

  return (
    <div className='w-full'>
        <ReactSearchAutocomplete
        items={options}
        onSelect={handleSelect()}
        autoFocus
        formatResult={formatResult}
        />
    </div>
  )
}

