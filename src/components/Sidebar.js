import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CommentIcon from '@mui/icons-material/Comment';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button  } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar({children}) {
  const [isOpen ,setIsOpen] =useState(false);

  const toggle =()=>setIsOpen(!isOpen)

  const menuItems =[
     
    {
      path :'/dashboard',
      name:'Dashboard',
      icons: <DashboardIcon/>
    },
    {
      path :'/analytics',
      name:'Analytics',
      icons: <AnalyticsIcon/>
    },
    {
      path :'/comment',
      name:'Comment',
      icons: <CommentIcon/>
    },
    {
      path :'/product',
      name:'Product',
      icons: <InventoryIcon/>
    },
    {
      path :'/productList',
      name:'Product List',
      icons: <ProductionQuantityLimitsIcon/>
    },
    
  ]
  const navigate = useNavigate();
  const logout =()=>{
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <div className='container'>
      <div style={{width: isOpen? "200px" : "50px"}} className='sidebar'>
        <div className='topSection'>
            <h1 style={{display: isOpen? "block" : "none"}} className='logo'>Logo</h1>
            <div style={{marginInlineStart: isOpen? "50px" : "0px"}} className='bars'>
              <MenuIcon onClick={toggle}/>
            </div>
        </div>
        {menuItems.map((item,index)=>(
          <NavLink to={item.path} key={index}   className={({ isActive }) => isActive? "active link": 'link'}>
            <div className='icon'>{item.icons}</div>
            <div style={{display: isOpen? "block" : "none"}} className='link_text'>{item.name}</div>
          </NavLink>
        ))}
        <div className='bottomSection' style={{display: isOpen? "block" : "none"}}>
              <Button onClick={logout} className='btn'>Logout</Button>
        </div>
      </div>
          <main>{children}</main>
    </div>
  )
}

export default Sidebar