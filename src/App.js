import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Hasil from './Hasil';
import { useState } from 'react';

function App() {
  let [api,getApi] = useState();
  let [cityName,getCityName] = useState([]);

  function onInput(event){
    getCityName(event.target.value);
  }

  function onSubmit(){
    axios.request({
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: `${cityName}`},
      headers: {
        'X-RapidAPI-Key': '8c3a0fcdbbmsh8aab629e2318a37p1361a9jsncb0f7e93085d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }).then(data => {
      console.log(data)
      getApi(data.data);
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div className="App">
      <h1 className='title'>Weather App</h1>

      <div className='inputCity'>
        <input onChange={onInput} className='inputField' placeholder='Masukkan Nama Kota Mu' />
        <button onClick={onSubmit} className='submit'>Submit</button>
      </div>
      {api ? <Hasil api={api}/> : null}
      {/* <Hasil api={api}/> */}
      
    </div>
  );
}

export default App;
