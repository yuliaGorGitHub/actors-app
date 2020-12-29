import logo from './logo.svg';
import './App.css';
import ActorComponent from './components/ActorComp';
import Actor from './models/Actor';
import ActorsPage from './pages/ActorsPage';

function App() {
  const actors = [
    new Actor("Brad","Pitt","1963-12-18","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_6"),
    new Actor("Millie","Brady","1993-12-24","https://m.media-amazon.com/images/M/MV5BY2NiMDIxYmEtYzFlMS00MjgyLTgxODEtN2RmZmMwYWM2YzA4XkEyXkFqcGdeQXVyMzY1MjI2MjU@._V1_UY317_CR44,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm6351089/?ref_=nv_sr_srsg_7"),
    new Actor("Kenneth","Branagh","1960-12-10","https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_UY317_CR3,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000110/?ref_=nv_sr_srsg_11"), 
    new Actor("Timothy","Olyphant","1968-05-20","https://m.media-amazon.com/images/M/MV5BMTc2NzY0OTA2Ml5BMl5BanBnXkFtZTYwNDYzODgz._V1_UY317_CR4,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0648249/?ref_=nv_sr_srsg_10") 
  ]

  return (
    <div className="App">
      <ActorsPage actors = {actors}/>
    </div>
  );
}

export default App;
