import '../App.css';
import {useEffect, useContext} from "react";
import {Route, Routes, useNavigate} from "react-router-dom"
import {AthleteContext} from "../context/athletes"
import Header from './Header';
import Navbar from './Navbar';
import NewAthlete from './NewAthlete';
import NewTeam from './NewTeam';
import TeamCards from './TeamCards';
import AthleteCards from './AthleteCards';
import logo from "../Media/wrench.gif"

function App() {
  const {allAthletes, setAllAthletes, allTeams, setAllTeams} = useContext(AthleteContext);

  const navigate = useNavigate();

  //General GET fetches
  useEffect(() => {
    fetch("http://localhost:9292/athletes")
    .then(res => res.json())
    .then(data => setAllAthletes(data))

    fetch("http://localhost:9292/teams")
    .then(res => res.json())
    .then(dataa => setAllTeams(dataa))
  }, []);


  //Post a new team
  const postTeam = (team) => {
    fetch("http://localhost:9292/teams",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(team)
    })
    .then(res => res.json())
    .then(newTeam => setAllTeams([newTeam,...allTeams]))
    .then(navigate("/teams"))
  }

  //Post a new athlete
  const postAthlete = (athlete) => {
    fetch("http://localhost:9292/athletes",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(athlete)
    })
    .then(res => res.json())
    .then(newAthlete => setAllAthletes([newAthlete,...allAthletes]))
    .then(navigate("/athletes"))
  }

  //Delete a team
  const handleDeleteTeam = (id) => {
    fetch(`http://localhost:9292/teams/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(() => setAllTeams(allTeams.filter(t => t.id !== id)))
  }

  //Delete an athlete
  const handleDeleteAthlete = (id) => {
    fetch(`http://localhost:9292/athletes/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(() => setAllAthletes(allAthletes.filter(a => a.id !== id)))
  }

  //Update an athletes skills
  const handleUpdateAthlete = (updatedAthlete) => {
    const updatedAthletes = allAthletes.map((athlete) => athlete.id === updatedAthlete.id ? updatedAthlete : athlete);
    setAllAthletes(updatedAthletes)
  }



  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/new_teams" element={<NewTeam postTeam={postTeam}/>}/>

        <Route exact path="/teams" element={allTeams.map(t => <TeamCards 
        key={t.id} id={t.id} name={t.name} image={t.image} location={t.location} 
        primaryC={t.primary_color} secondaryC={t.secondary_color} 
        handleDeleteTeam={handleDeleteTeam}/>)}
        />

        <Route path="/new_athletes" element={<NewAthlete 
        postAthlete={postAthlete} teams={allTeams}/>}
        />

        <Route path="/athletes/train"/>

        <Route path="/athletes" element={allAthletes.map(a => <AthleteCards 
        key={a.id} id={a.id} name={a.name} image={a.image} team={a.team.name} 
        teamId={a.team_id} height={a.height} weight={a.weight} speed={a.speed} 
        strength={a.strength} handleDeleteAthlete={handleDeleteAthlete} 
        onUpdateAthlete={handleUpdateAthlete} />)} 
        />

        <Route path="/" element={
        <>
          <h1 style={{color: "purple"}}>Remember the 5 D's of Dodgeball: Dodge, Duck, Dip, Dive and Dodge!</h1>
          <iframe src="https://giphy.com/embed/26BRsI63ak8uxsU6Y" width="500" height="300" frameBorder="0"  allowFullScreen></iframe>
        </>}/>
          
        <Route path="*" element={
          <div>
            <h1>ERROR: You could not dodge a wrench</h1>
            <img src={logo} alt="wrench"/>
          </div>} />
          
      </Routes>
    </div>
  );
}

export default App;