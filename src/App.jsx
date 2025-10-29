import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  return (
    <div>
      <ConditionalComponent display={true} />
       <ConditionalComponent display={false} />
    </div>
  );
}

export default App;
