import React, {useState} from 'react'
import TopBar from '../../components/appbar/AppBar'
import SideBar from '../../components/sidebar/SideBar'

function Header() {
    const [toggle, setToggleState] = useState(false)
    
    const handleToggle = () => {
        setToggleState(!toggle)
    }
  return (
    <div style={{display: 'flex'}}>
        <SideBar toggle={toggle}/>
        <TopBar toggle={toggle} handleToggle={handleToggle}/>
    </div>
  )
}

export default Header