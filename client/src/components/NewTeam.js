import {useState} from "react"
function NewTeam({postTeam}) {
    const [teamData, setTeamData] = useState({
        name:'',
        image:'',
        location:'',
        primary_color:'',
        Secondary_color:''
    })

    const handleChange = (e) => {
        setTeamData({...teamData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postTeam(teamData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder="TEAM NAME" type="text" name="name" value={teamData.name} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="TEAM IMAGE" type="text" name="image" value={teamData.image} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="TEAM LOCATION" type="text" name="location" value={teamData.location} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="TEAM PRIMARY COLOR" type="text" name="primary_color" value={teamData.primary_color} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="TEAM SECONDARY COLOR" type="text" name="secondary_color" value={teamData.secondary_color} onChange={handleChange}/>
            </label>
            <input style={{width:"200px", margin:"auto"}} type="submit" value="submit"/>
        </form>
    )
}

export default NewTeam