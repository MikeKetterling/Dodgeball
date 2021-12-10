

function TeamCards({id, name, image, location, primaryC, secondaryC, handleDeleteTeam}) {

    return (
        <div className="teamCards">
            <h4>{name}</h4>
            <img src={image}/>
            <p>Team Location: {location}</p>
            <p>Primary Team Color: {primaryC}</p>
            <p>Secondary Team Color: {secondaryC}</p>
            <button onClick={() => handleDeleteTeam(id)}>Disband Team</button>
        </div>
    )
}

export default TeamCards