import "./comp.css"
function About() {
  return (
    <div className="about" style={{padding:"2rem"}}>
      <div className="heading">
        <h1 style={{fontSize:"8vw"}}>KAFF Solutions</h1>
      <br/>
      <p style={{fontSize:"2vw"}}>KAFF Solutions is a forward-thinking Information Technology company specializing in cutting-edge Software as a Service (SaaS) and Platform as a Service (PaaS) solutions. We empower businesses of all sizes and industries to thrive in today&apos;s dynamic digital landscape.</p>
      </div>
      <div className="image"style={{float:"right"}}>
        <img src="https://appinventiv.com/wp-content/uploads/sites/1/2022/06/The-Ultimate-Guide-to-Software-Development-05-scaled.webp"
        width={500}
        height={500}
        className="responsiveImg"
        
        />

      </div>
    </div>
  )
}

export default About
