import { Link } from "react-router-dom";
function Timetable(){
    return (
        <>
            <div className="timetable">
                <div className="team-name">
                    BRAIN CODE
                </div>
                <div className="cards">
                    <Link to="/csa"><div className="card">CS A</div></Link>
                    <Link to="/csb"><div className="card">CS B</div></Link>
                    <Link to="/it"><div className="card">IT</div></Link>
                    <Link to="/ece"><div className="card">ECE</div></Link>
                    <Link to="/eee"><div className="card">EEE</div></Link>
                    <Link to="/ce"><div className="card">CE</div></Link>
                </div>
            </div>
        </>
    );
}

export default Timetable