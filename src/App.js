import './App.css';
import React, { useRef, useState} from "react"
import Container from '@mui/material/Container';
import answers from './answer';



var num = Math.floor(Math.random() * 499);
function App() {

  
  const ip1 = useRef();
  const ip2 = useRef();
  const ip3 = useRef();
  const ip4 = useRef();
  const ip5 = useRef();
  const btnref = useRef();
  const rtyref = useRef();
  const input_field = [ip1, ip2, ip3, ip4, ip5];
  const [input_val1, setInput1_val] = useState('');
  const [input_val2, setInput2_val] = useState('');
  const [input_val3, setInput3_val] = useState('');
  const [input_val4, setInput4_val] = useState('');
  const [input_val5, setInput5_val] = useState('');
  const input_array = [input_val1, input_val2, input_val3, input_val4, input_val5];
  const [lives, setLives] = useState(1);
  var answer = answers[num];
  function check(){
    if(lives < 7){
      setLives(life => life+1);
    }
    var correct = 0;
      for(let i = 0; i < input_array.length; i++){
        if(input_array[i].toLowerCase() === answer[i].toLowerCase()){
          input_field[i].current.style.backgroundColor = "rgba(67, 184, 67, 0.685)";
          input_field[i].current.style.color = "white";
          correct++;
        } else if(answer.toLowerCase().includes(input_array[i].toLowerCase()) && input_array[i].length !== 0){
          input_field[i].current.style.backgroundColor = "rgb(235, 227, 121, 0.9)";
          
          input_field[i].current.style.color = "white";
        }else{
          input_field[i].current.style.backgroundColor = "lightgray";
          
          input_field[i].current.style.color = "white";
        }
    }
    if(lives < 7){
      if(correct === 5){
        alert("you win!")
          
        btnref.current.style.visibility = "hidden";
        rtyref.current.style.visibility = "visible"
      }else if (correct !== 5){
        addFeield();
      }
    }else{
      alert(`you lost! the answer is "${answer}"`)
      btnref.current.style.visibility = "hidden";
      rtyref.current.style.visibility = "visible"
    }
   
  }
  const [inputField, setInputField] = useState([{className: '', ref:'',maxLength:1}])

  const addFeield =() => {
    let field = {className: "input1", ref:{ip1}, maxLength:1}

    setInputField([...inputField, field]);
    setInput1_val('');
    setInput2_val('');
    setInput3_val('');
    setInput4_val('');
    setInput5_val('');
  }
  return (
    <div className="App">
      <Container maxwidth="sm">
        <h1>Welcome to the Wordle game!</h1>
      <a>Current tries: {lives} (Max: 7)</a>
        
        <div>
            {inputField.map((input, index) => {
              return(
                <div key = {index}>
                  <input className="input1" ref={ip1} maxLength="1" onChange={(event) => {setInput1_val(event.target.value); if(event.target.value.length === 1){ip2.current.focus()}}} ></input>
                  <input className="input2"ref={ip2}  maxLength="1" onChange={(event) => {setInput2_val(event.target.value); if(event.target.value.length === 1){ip3.current.focus()}}}></input>
                  <input className="input3"ref={ip3} maxLength="1"  onChange={(event) => {setInput3_val(event.target.value); if(event.target.value.length === 1){ip4.current.focus()}}}></input>
                  <input className="input4"ref={ip4} maxLength="1" onChange={(event) => {setInput4_val(event.target.value); if(event.target.value.length === 1){ip5.current.focus()}}}></input>
                  <input className="input5" ref={ip5}maxLength="1" onChange={(event) => {setInput5_val(event.target.value);}}></input>
                </div>
              );
            })}  
        </div>
        <div className='btnArea'>
          <button className='btnSubmit' onClick={check} ref={btnref}>SUBMIT</button>
          <form action="" className='retry' >
            <input type="submit" value="RETRY" className='btnRetry' ref={rtyref}></input>
          </form>
        </div>
      
      </Container>
     
    </div>
  );
}

export default App;
