import React from "react";
import ReactDOM  from "react-dom";


function Bye () {
return <div><strong>Hello to the Future</strong></div>;

}

ReactDOM.render(<Bye/>, document.querySelector('#root'));

export default Bye;