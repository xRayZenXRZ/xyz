import './App.css'

// add
import { tweets } from './data/tweets.ts'
import { TweetsList } from './components/TweetsList.tsx'

function App() {
  
  const initialTweets = tweets

  return (

    

    <div>
      <h2>Nombre totale de tweet : {initialTweets.length}</h2>
      {TweetsList({tweets : initialTweets})}
    </div>
  )
}

export default App
