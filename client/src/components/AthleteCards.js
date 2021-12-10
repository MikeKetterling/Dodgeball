

function AthleteCards({id, teamId, name, image, team, height, weight, speed, strength, handleDeleteAthlete, onUpdateAthlete}) {
    //increase speed skill
    const handleSpeedUpdate = () => {
        const updateAthlete = {
            speed: speed + 1, 
            strength:strength,
            team_id:teamId,
            name:name,
            image:image,
            height:height,
            weight:weight,
        };
        fetch(`http://localhost:9292/athletes/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updateAthlete)
          })
          .then(res => res.json())
          .then(onUpdateAthlete);
    }

    //increase strength skill
    const handleStrengthUpdate = () => {
        const updateAthlete = {
            speed:speed, 
            strength:strength+1,
            team_id:teamId,
            name:name,
            image:image,
            height:height,
            weight:weight,
        };
        fetch(`http://localhost:9292/athletes/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updateAthlete)
          })
          .then(res => res.json())
          .then(onUpdateAthlete);
    }

    return (
        <div className="athleteCards">
            <h4>{name}</h4>
            <img src={image}/>
            <p>Team: {team}</p>
            <p>Speed Skill: {speed}</p>
            <button onClick={(e) => handleSpeedUpdate(e)}>Train Speed Skill</button>
            <p>Strength Skill: {strength}</p>
            <button onClick={(e) => handleStrengthUpdate(e)}>Train Strength Skill</button>
            <p>Athletes Height: {height}In</p>
            <p>Athletes Weight: {weight}lbs</p>
            <button onClick={() => handleDeleteAthlete(id)}>Retire Athlete</button>
        </div>

    )
}

export default AthleteCards