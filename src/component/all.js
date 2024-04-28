import { React, useReducer, useState } from 'react'
import './style.css';
import
 {BurgerInfo,ChknInfo,HDrinkInfo,FiresInfo,Panccakes,PizaaInfo,SaladInfo,SDinkInfo,AllInfo} 
 from "./index"

 function All() {
  const [tooglestate, settogglestate] = useState(1);
  const toggleButton = (index) => {
    settogglestate(index)
  }

  return (
    <>
      <div className='countiner'>
        <div className="all-tabs">
          <input placeholder="Search" type="search" />
          <div className="tabs">

            <div className={tooglestate === 1 ? "tab active-tab " : "tab "} onClick={() => toggleButton(1)}>All</div>
            <div className={tooglestate === 2 ? "tab active-tab " : "tab"} onClick={() => toggleButton(2)}>Burger</div>
            <div className={tooglestate === 3 ? "tab active-tab " : "tab"} onClick={() => toggleButton(3)}>pizza</div>
            <div className={tooglestate === 4 ? "tab active-tab " : "tab"} onClick={() => toggleButton(4)}>Fries</div>
            <div className={tooglestate === 5 ? "tab active-tab " : "tab"} onClick={() => toggleButton(5)}>Salad</div>
            <div className={tooglestate === 6 ? "tab active-tab " : "tab"} onClick={() => toggleButton(6)}>Chkn</div>
            <div className={tooglestate === 7 ? "tab active-tab " : "tab"} onClick={() => toggleButton(7)}>mini Panccakes</div>
            <div className={tooglestate === 8 ? "tab active-tab " :  "tab"} onClick={() => toggleButton(8)}>Hot Drink</div>
            <div className={tooglestate === 9 ? "tab active-tab " :  "tab"} onClick={() => toggleButton(9)}>soft Drink</div>
          </div>
        </div>
<hr />
        <div className="contents">
          <div className={tooglestate === 1 ? "content active-content " : "content"}><AllInfo /></div>
          <div className={tooglestate === 2 ? "content active-content " : "content"}><BurgerInfo /></div>
          <div className={tooglestate === 3 ? "content active-content " : "content"}><PizaaInfo /></div>
          <div className={tooglestate === 4 ? "content active-content " : "content"}><FiresInfo /></div>
          <div className={tooglestate === 5 ? "content active-content " : "content"}><SaladInfo /></div>
          <div className={tooglestate === 6 ? "content active-content " : "content"}><ChknInfo /></div>
          <div className={tooglestate === 7 ? "content active-content " : "content"}><Panccakes /></div>
          <div className={tooglestate === 8 ? "content active-content " : "content"}><HDrinkInfo /></div>
          <div className={tooglestate === 9 ? "content active-content " : "content"}><SDinkInfo /></div>
    

        </div>
      </div>




    </>
  )
}

export default All
