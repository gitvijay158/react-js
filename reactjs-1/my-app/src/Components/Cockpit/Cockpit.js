import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {


  const toggleButtonRef = useRef(null)
  const authContext = useContext(AuthContext);




  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Cockpit UseEffect | call every time when component is load.')
    }, 1000)
    return () => {
      clearTimeout(timer);
      console.log('Cockpit : Unmount')
      return false;
    }
  })


  useEffect(() => {

    toggleButtonRef.current.click();

    setTimeout(() => {
      console.log('Cockpit UseEffect | call One time when component is load (##################).')
    }, 1000)

  }, [])


   useEffect(() => {
     setTimeout(() => {
       alert('Cockpit UseEffect | call when prop of person is changed.')
     }, 1000)

   },[props.persons])



   console.log('props values', props)


  let styleObj = {
    "backgroundColor": "green",
    "border": "none",
    "color": "white",
    "padding": "15px 32px",
    "textAlign": "center",
    "textDecoration": "none",
    "display": "inline-block",
    "fontSize": "10px"
  }


  console.log(props.personsLength)
  if (props.personsLength < 1) {
    styleObj = {
      "backgroundColor": "green",
      "border": "none",
      "color": "white",
      "padding": "15px 32px",
      "textAlign": "center",
      "textDecoration": "none",
      "display": "inline-block",
      "fontSize": "16px"
    }
  }

  return (
    <div>
      <p>I am in App</p>
      <div>
      <button
        ref={toggleButtonRef}
        style={styleObj}
        onClick={props.showNamehandler}
      >Toggle Name</button>

      <button  style={styleObj} onClick={authContext.login}>Log in</button>
      </div>
    </div>
  )
}

export default React.memo(Cockpit);
