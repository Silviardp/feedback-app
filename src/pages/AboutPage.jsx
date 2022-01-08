import Card from "../components/shared/Card"

function AboutPage() {
 return (
  <Card>
   <div className="about">
    <h1>About this project</h1>
    <p>This is a react app to leave feedback for product or service</p>
    <p>Version: 1.0.0</p>
   </div>
   <a href="/">Back to Home</a>
  </Card>
 )
}

export default AboutPage
