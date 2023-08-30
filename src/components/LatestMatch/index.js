// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
    competingTeamLogo,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-card-logo-container">
          <div className="latest-card-part1">
            <div>
              <p className="competing-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-team-logo"
            />
          </div>
          <hr className="hr-line" />
          <div className="latest-card-part2">
            <p className="first-innings">First Innings</p>
            <p className="first-innings-api">{firstInnings}</p>
            <p className="second-innings">Second Innings</p>
            <p className="second-innings-api">{secondInnings}</p>
            <p className="man-of-the-match">Man Of The Match</p>
            <p className="man-of-the-match-api">{manOfTheMatch}</p>
            <p className="umpires">Umpires</p>
            <p className="umpires-api">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
