import React from "react"
import './App.css'
import Button from "./components/Button/Button.jsx";
import FilterButton from "./components/Button/FilterButton.jsx";
import DropDownMenu from "./components/Button/DropDownMenu.jsx";

function App() {

  return (
    <>
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
            buttonStyle="baseButton redButton"
        />
    </>
  )
}

export default App
