import React from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [counter, setCounter] = useState(0);
  async function getData() {
    try {
      const reponse = await axios.get("");
      console.log(reponse.data);
    } catch (error) {
      console.log("erreur");
    }
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={getData}>getData</button>
    </div>
  );
};

export default App;

// import "./App.css";
// import Li from "./components/Li";
// function App() {
//   const items = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <Li data={item} key={index} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
