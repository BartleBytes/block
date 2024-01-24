import profile2 from './images/IMG_2195.jpeg';
import profile1 from './images/IMG_2488.jpeg';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div id={employee.id} onClick={handleEmployeeCardClick} style={{ cursor: "pointer" }} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}>
      {(employee.gender === 'male') ? <img src={profile2} className="card-img-top" alt="profile" /> : <img src={profile1} className="card-img-top" alt="profile" />}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard