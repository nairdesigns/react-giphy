import "../assets/stylesheets/application.scss";
import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

const root = document.querySelector("#root");
console.log(root);
ReactDOM.render(<App />, root);

// funcitoal component
// syntax that we will user more!
// const Hello = (props) => {
//   const { name, flag } = props;
//   return (
//     <div>
//       <h1>
//         Hello world! -from {name} {flag}
//       </h1>
//     </div>
//   );
// };

// class component

// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>
//           Hello {name}, {flag}
//         </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Hello name="Gary" flag="🏁" />, root);
