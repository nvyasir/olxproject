import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={
          ()=>{
            history.push('/')
          }
        }>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ff0000"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {
          user ? 
          <div>
            <span>
          {user ? `Welcome ${user.displayName} ` : 'Login'}
          </span>
          {user && <button type="button" class="btn btn-secondary" onClick={()=>
          {
            firebase.auth().signOut();
            history.push('/')
          }}>Logout</button>}
          
    </div>
  
          

          :
          <div className="loginPage">
          
          <span onClick={()=>
          {
            history.push('/login')
          }
          }>Login</span>
          <hr />
        </div>

        }
        
        
        <div className="sell
        Menu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>

            <span onClick={()=>{
              user ?
              history.push('/create')
              :
              history.push('/login')

            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
