import ActorComponent from "../components/ActorComp";

function ActorsPage (props)
{
    const  {actors} = props;

    const actorsDisp = [];
    actorsDisp.push( actors.map(actor => <ActorComponent  actor = {actor}/>));

    return (
        <>
        {actorsDisp}
        </>
    )

}
export default ActorsPage;