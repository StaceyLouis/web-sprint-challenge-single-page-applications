import React from "react"
import {Link} from 'react-router-dom'
import'../App.css'

function Home() {
    return(
        <div>
            <div className="jumbotron">
    
    <Link to='/pizza'><button>Click to Order!</button></Link>
            </div>
           
        </div>
    )
}

export default Home;