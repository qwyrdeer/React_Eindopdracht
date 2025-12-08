import React from "react"
import './App.css'
import Button from "./components/Button/Button.jsx";
import FilterButton from "./components/Button/FilterButton.jsx";
import DropDownMenu from "./components/Button/DropDownMenu.jsx";

import LogOutIcon from "./assets/Icons/SVG/LogOutIcon.svg";
import ArrowDownIcon from "./assets/Icons/SVG/Arrowdown.svg";
import TopMenu from "./components/Menu/TopMenu.jsx";

function App() {

  return (
    <>
        <nav>
<TopMenu
/>
        </nav>
      <Button
      buttonName="Yes, delete"
      buttonStyle="baseButton greenButton"

      />
        <Button
            buttonName="Yes, delete"
            buttonStyle="baseButton greenButton"
        />
        <br/>
        <br/>
        <br/>
        <FilterButton
        buttonName="Filter"
        buttonIcon={ArrowDownIcon}
        alt="arrow icon"
        />
        <br/>
        <br/>
        <br/>
        <DropDownMenu
            fieldName="Block Duration"
            fieldData="block-duration"
            fieldOptions={["One day", "One week", "Permanent"]}
            />
        <br/>
        <br/>
        <br/>
        <Button
            buttonName="Logout"
            buttonStyle="baseButton logOutButton"
            buttonIcon={LogOutIcon}
            alt="LogOut Icon"
            iconWidth="20"
            iconHeight="20"
        />
    </>
  )
}

export default App
