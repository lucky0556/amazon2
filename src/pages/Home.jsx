import Front from "../components/Front";
import Second from "../components/Second";
import Third from '../components/Third';
import Last from '../components/Last.jsx';
import '../App.css';
function Home()
{
  return(
    <div>
      <div className="front"><Front /></div>
    
     <div className="second"><Second/></div>

     <div className="third"><Third/></div>
     <div className="last" style={{ margin: '0px' }}><Last/></div>
    </div>

  )
}
export default Home;