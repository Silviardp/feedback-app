import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
 

function AboutPage() {
 return (
  <Card>
   <div className="about">
    <h1>About this project</h1>
    <p>This is a react app to leave feedback for product or service</p>
    <p>Version: 1.0.0</p>
   </div>
   <Link to="/">Back to Home</Link>
  </Card>
 )
}

export default AboutPage
