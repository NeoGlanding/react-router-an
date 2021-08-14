import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div>
      This is Homepage
    </div>
  )
}

const Topic = props => {
  return (
    <div>
      This is topics page
    </div>
  )
}

const TopicDetails = props => {
  console.log(props)
  return (
    <div>
      <p>This is detail topics page {props.match.params.topicId}</p>
      <button onClick={() => props.history.push('/')}></button>
      <Link to='/topic' >UYyyyyy</Link>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path ='/topic' component={Topic} />
      <Route path='/topic/:topicId' component={TopicDetails} />
    </div>
  );
}

export default App;
