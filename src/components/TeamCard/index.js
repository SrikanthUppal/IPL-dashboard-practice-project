import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="link-item">
      <Link to={`/team-matches/${id}`} className="team-card-item">
        <img src={teamImageUrl} alt={name} className="card-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
