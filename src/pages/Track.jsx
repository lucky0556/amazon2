import Front from "../components/Front";
import Trackcontent from "../track/Trackcontent";
import { useParams } from 'react-router-dom';

function Track()
{
    const {id}=useParams();
    return(
        <div>
            <Front/>
            <Trackcontent id={id} />
        </div>            
    )
}
export default Track;