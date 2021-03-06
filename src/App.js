import React from "react";

function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <div className={combinedClassName} style={newStyles}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
