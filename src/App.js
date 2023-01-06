import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New  Baru");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9, 12, 14, 30, 33, 35, 40], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />

      <Button onClick={changeTitleHandler}>ora ono judul</Button>
    </div>
  );
}

export default App;
