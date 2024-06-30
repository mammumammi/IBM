// import book from '../assets/image1.jpg'
import { Link } from 'react-router-dom'
function HomePage(){
    return (
        <div className="Homepage">
            <div className="team-name">
                BRAIN CODE
            </div>
            <div className="motto">
                 <h3> A website to make students academic life easier </h3>
                 <Link to="/timetable"><button>Let&apos;s Learn</button></Link>
            </div>
        </div>
    );
}

export default HomePage;