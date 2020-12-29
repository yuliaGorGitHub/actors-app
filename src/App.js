import logo from './logo.svg';
import './App.css';
import ActorComponent from './components/ActorComp';
import Actor from './models/Actor';
import ActorsPage from './pages/ActorsPage';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState("");
  const [sortby,setSort] = useState("");


  const actors = [
    new Actor("Brad","Pitt","1963-12-18","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_6"),
    new Actor("Millie","Brady","1993-12-24","https://m.media-amazon.com/images/M/MV5BY2NiMDIxYmEtYzFlMS00MjgyLTgxODEtN2RmZmMwYWM2YzA4XkEyXkFqcGdeQXVyMzY1MjI2MjU@._V1_UY317_CR44,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm6351089/?ref_=nv_sr_srsg_7"),
    new Actor("Kenneth","Branagh","1960-12-10","https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_UY317_CR3,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000110/?ref_=nv_sr_srsg_11"), 
    new Actor("Timothy","Olyphant","1968-05-20","https://m.media-amazon.com/images/M/MV5BMTc2NzY0OTA2Ml5BMl5BanBnXkFtZTYwNDYzODgz._V1_UY317_CR4,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0648249/?ref_=nv_sr_srsg_10") 
  ]
  
  // filter
  var filteredAcArr =  actors.filter(function(actor) {
    return (actor.fname.toLowerCase().includes(input) || actor.lname.toLowerCase().includes(input));   
    });

  // sort 
  filteredAcArr.sort(function(a, b)
   {
    if(sortby === "")
      return;

    if(sortby === "age")
    {
      return  (a.age() - b.age());
    }
    else if (sortby === "fname")
    {
      var nameA = a.fname.toLowerCase(); // ignore upper and lowercase
      var nameB = b.fname.toLowerCase(); // ignore upper and lowercase
    }
    else
    {
      var nameA = a.lname.toLowerCase(); // ignore upper and lowercase
      var nameB = b.lname.toLowerCase(); // ignore upper and lowercase
    }

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return (
    <div className="p-App">
      <div>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <label htmlFor="sort"  className="sel">Choose sorting type:</label>
        <select name="sort" onChange={e => setSort(e.target.value)}>
        <option value="">Please select</option>
          <option value="fname">First Name</option>
          <option value="lname">Last Name</option>
          <option value="age">Age</option>
        </select>
      </div>
      <ActorsPage actors = {filteredAcArr}/>
    </div>
  );
}

export default App;
