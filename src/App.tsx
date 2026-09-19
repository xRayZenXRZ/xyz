import './App.css'

// add
import { tweets } from './data/tweets.ts'
import { TweetsList } from './components/TweetsList.tsx'

function App() {
  
  const initialTweets = tweets

  return (
    <>
      <h1 className="main-head-site-name">XYZ</h1>
      <hr className="main-seperator"/>
      <h2 className="main-tweet-length">{initialTweets.length} tweets</h2>
      {/* App transmet la liste des tweets à TweetsList, qui l'affichera. */}
      {TweetsList({tweets : initialTweets})}
    </>
  )
}

export default App
