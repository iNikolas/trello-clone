import React, { useReducer } from "react";
import { AppContainer } from "./styled";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem
        onAdd={(text) => console.log(text)}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
