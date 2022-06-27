import React from "react";
import ReactDOM  from "react-dom";


function Hi () {
return <div><strong>Hello World</strong></div>;

}

ReactDOM.render(<Hi/>, document.querySelector('#root'));

export default Hi;