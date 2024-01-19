import React from 'react'
import { useState } from 'react';
import Icon from '../../image/Icon.png'
import SearchIcon from '../../image/searchIcon.png'
function Header({onSearch, setIsAdding}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }
    return (
    <div style={{width: "100%", marginTop:"50px"}}>
    <form>
        <div style={{width: "20%",display: "inline-block"}}>
            <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search"
            />
            </div>
            <img src={SearchIcon} onClick={handleSubmit}/>
    </form>
<span style={{ float:"right"}}>
<button onClick={() => setIsAdding(true)} style={{color: "white"}}><img src={Icon}/> Add</button>
</span>
</div>)
}

export default Header