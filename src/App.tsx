import React, { useReducer } from "react";
import { AppContainer } from "./styled";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column id={list.id} text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
