import logo from './logo.svg';
import './App.css';

function Hasil({api}) {
  return (
    <div className="result">
        <div className='cityResult'>
            <h1>{api.location.name}</h1>
        </div>

        <div className='weatherResult'>
        <h1>{api.location.name}</h1>
        </div>

        <div className='windResult'>
        <h1>{api.location.name}</h1>
        </div>

        <div className='tempResult'>
        <h1>{api.location.name}</h1>
        </div>
      
    </div>
  );
}

export default Hasil;
