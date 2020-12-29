import Actor from '../models/Actor';
import './ActorComp.css';

function ActorComponent () {
    const actor = new Actor("a","b","2000-01-31","",""); 
    return(
  
        <div>
            actor component <br/>
            first name {actor.fname}  <br/>
            last name {actor.lname}  <br/>
            birthday {actor.birthday.toDateString()}  <br/>
            image {actor.image}  <br/>
            linkIMDB {actor.linkIMDB}  <br/>
            age {actor.age()}  <br/>
        </div>
    )
};

export default ActorComponent;