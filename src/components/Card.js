import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../images.jpg';
import { Link } from 'react-router-dom';


function Cards({data}) {
  
  Object.values(data).map((d)=>{
  
    console.log(d)
  })
  return (
    data.map((e=>
    <Card style={{ width: '25rem',height:'fit-content', margin: '2rem' }}>
      <Card.Body>
        <div>
          {/* <img src={img}/> */}
        </div>
        <Card.Title>{e.company}</Card.Title>
        <hr style={{margin:'1px'}}/>
        <div>
        <div className='d-flex w-100'>
            <div className='ax'>Domain: {e.domain}</div><div className='ay'>Stipend: {e.stipend}</div>
        </div>
        <div className='d-flex'>
          <div className='ax'>Duration: {e.duration}</div><div className='ay'>Location: {e.location}</div>
        </div>
        </div>
        <hr style={{margin:'1px'}}/>
        <Card.Text>
          
        Prerequisite: {e.prereq}
        </Card.Text>
        <div className='text-end'>
        <Button variant="primary" href={e.url} target='blank'> Apply</Button>
        </div>
      </Card.Body>
    </Card>
    ))
  );
}

export default Cards;