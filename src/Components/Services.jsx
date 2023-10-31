import Card from 'react-bootstrap/Card';
import "./comp.css"
function Services() {
  return (
    <>
        <h1 style={{textAlign:"center",marginTop:"1.5rem",color:"#ced4da"}}>Our Services</h1>
    <div className='services'>
        <Card style={{ width: '18rem',height:"30rem" }}>
      <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5112AQHE9aK8-n_rPg/article-cover_image-shrink_720_1280/0/1565335287169?e=2147483647&v=beta&t=BCLkTGGTOm43oL1MCZplSVqmGJLghWGuU1lmCvuwgxg"
      height={250}
      />
      <Card.Body>
        <Card.Title className='text-center'>Cloud Based CRM</Card.Title>
        <Card.Text className='text-center'>
        Our Cloud-Based Customer Relationship Management (CRM) software allows you to manage and nurture customer relationships efficiently. Stay organized, enhance customer interactions, and make data-driven decisions.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://nix-united.com/wp-content/uploads/2022/10/1_.jpg" height={250} />
      <Card.Body>
        <Card.Title className='text-center'>Marketing Automation</Card.Title>
        <Card.Text className='text-center'>
        Automate your marketing efforts with our Marketing Automation platform. Reach your target audience effectively, nurture leads, and measure campaign performance.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.infosysbpm.com/content/dam/infosys-bpm/en/blogs/images/ecommerce-integration-guide-medium.jpg" 
      height={250}/>
      <Card.Body>
        <Card.Title className='text-center'> E-commerce Integration</Card.Title>
        <Card.Text className='text-center'>
        Seamlessly integrate e-commerce platforms into your business operations. Optimize sales, inventory management, and customer experience for online retailers.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='services'>
        <Card style={{ width: '18rem',height:"30rem" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxFLoh4M1TA3o5dl4A1sr5RRhCUAp7eT38A&usqp=CAU"
      height={250}
      />
      <Card.Body>
        <Card.Title className='text-center'>Application Development Platform</Card.Title>
        <Card.Text className='text-center'>
        Leverage our Application Development Platform to build, deploy, and scale applications without the hassle of managing infrastructure. Focus on creating great apps, while we handle the backend.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.visolve.com/uploads/images/ViSolve-Database-Services.png" height={250} />
      <Card.Body>
        <Card.Title className='text-center'>Database as a Service (DBaaS)</Card.Title>
        <Card.Text className='text-center'>
        Simplify your data management with our Database as a Service solution. Enjoy secure, high-performance databases without the complexity of setup and maintenance.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://incartmarketing.com/wp-content/uploads/analytics_160050128-ss-1920.jpg" 
      height={250}/>
      <Card.Body>
        <Card.Title className='text-center'> Analytics Platform</Card.Title>
        <Card.Text className='text-center'>
        Drive data-driven decisions with our Analytics Platform. Collect, analyze, and visualize data to uncover insights that fuel business growth.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </>
    
    
  );
}

export default Services;