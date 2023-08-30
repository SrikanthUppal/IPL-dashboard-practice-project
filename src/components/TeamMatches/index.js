// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getMatchesList()
  }

  getFormateData = data => ({
    competingTeam: data.competing_team,
    date: data.date,
    venue: data.venue,
    result: data.result,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    manOfTheMatch: data.man_of_the_match,
    umpires: data.umpires,
    competingTeamLogo: data.competing_team_logo,
    id: data.id,
    matchStatus: data.match_status,
  })

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedList = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormateData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormateData(eachMatch),
      ),
    }
    console.log(updatedList)
    this.setState({teamMatchesData: updatedList, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamMatchesData
    return (
      <div className="response-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <LatestMatch latestMatchData={latestMatch} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchesDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderClassNames = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.renderClassNames()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
