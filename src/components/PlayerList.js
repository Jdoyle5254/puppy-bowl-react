import Player from './Player'

function PlayerList(props){
    
    console.log("pl", props.players)
    
    //create a list of Player components
    const allPlayers = props.players.map(player => {
        return <Player firstName={player.firstName} breed={player.breed} hobbies={player.hobbies} />
    });
    return <div> {allPlayers} </div> 
}

export default PlayerList; 
