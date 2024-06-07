import React, {useEffect, useState} from 'react'

const Search = (props) => {
  const [searchText, setSearchText] = useState("")

  const searchHandle = (e) => {
    setSearchText(e.target.value) 
  }

  useEffect(() =>{
    props.takeFromSearch(searchText)
  }, [searchText])

  return (
    <div style={{textAlign: "center"}}>
        <input type="text" placeholder='Search Country' 
        value={searchText} onChange={searchHandle}/>
    </div>
  )
}

export default Search