

import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


interface Options {
    id : number,
    name : string
}

export function KeywordBar({options} : {options : Array<Options >}): React.JSX.Element {
  // note: the id field is mandatory
  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const formatResult = (item : Options) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  console.log(options)

  return (
    <div className='w-full'>
        <ReactSearchAutocomplete
        items={options}
        onSearch={handleOnSearch}
        autoFocus
        formatResult={formatResult}
        />
    </div>
  )
}

