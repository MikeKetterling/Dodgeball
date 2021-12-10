import {useState} from 'react'
function NewAthlete({postAthlete, teams}) {
    const [athleteData, setAthleteData] = useState({
        name:'',
        image:'',
        height:'',
        weight:'',
        speed:'',
        strength:'',
        team_id:''
    })

    const handleChange = (e) => {
        setAthleteData({...athleteData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postAthlete(athleteData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder="ATHLETE NAME" type="text" name="name" value={athleteData.name} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="ATHLETE IMAGE" type="text" name="image" value={athleteData.image} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="ATHLETE HEIGHT IN INCHES" type="number" name="height" value={athleteData.height} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="ATHLETE WEIGHT IN POUNDS" type="number" name="weight" value={athleteData.weight} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="ATHLETE SPEED SKILL" type="number" name="speed" value={athleteData.speed} onChange={handleChange}/>
            </label>
            <label>
                <input placeholder="ATHLETE STRENGTH SKILL" type="number" name="strength" value={athleteData.strength} onChange={handleChange}/>
            </label>
            <label>
                <select name="team_id" onChange={handleChange}>
                    <option>SELECT A TEAM FOR NEW ATHLETE</option>
                    {teams.map(t => <option value={t.id}>{t.name}</option>)}
                </select>
            </label>
            <input style={{width:"200px", margin:"auto"}} type="submit" value="submit"/>
        </form>
    )
}

export default NewAthlete