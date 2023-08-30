import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchesDetails

  const renderStatusColor = status => (status === 'Won' ? 'green' : 'red')

  const statusColor = renderStatusColor(matchStatus)

  return (
    <li className="recent-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-competing-team-logo"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className={`recent-match-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
