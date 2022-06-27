import React from 'react'
import ReactDOM  from 'react-dom'
import Hi from './comp/Hi'
import Bye from './comp/Bye'
import Mathequ from './comp/Mathequ'
import Mediacard from './comp/MediaCard/Mediacard'

function index() {
  return (
    <div>

       <div>
    <Hi/>
      </div>
      <div>
      <Bye/>
      </div>
      <div>
      <Mathequ/>
      </div>

    </div>
  )
}




function Pfun (props) {
  return <div><strong> Hello {props.name} </strong></div>;
}

ReactDOM.render(<Pfun name="Suhaib"/>, document.querySelector('#root'));


function Pfun2 (props) {
return(<div><strong>First-Name:</strong> {props.first} <strong>Last-Name:</strong> {props.last}</div>)

}

ReactDOM.render(<Pfun2 first="Suhaib" last="Ahmad"/> , document.querySelector('#root'));
export default index;
