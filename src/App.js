import { ProgressBar, Card ,Form} from "react-bootstrap";
import "./App.css";
import { useState } from 'react';
import Header from "./header/Header";
import Containers from "./bodycontent/Containers";
 

/*const LevelBox=({ title, level, maxLevel }) =>{
  const progress = (level / maxLevel) * 100;
  const [showProgress, setShowProgress] = useState(true);


  const toggleProgress = () => {
    setShowProgress(!showProgress);

  };
  
  

  return (
    <Card style={{ width: '18rem', margin: '1rem' ,marginTop:"7rem" }}>
    <Card.Body style={{ height: '32rem' }}>
      <Card.Title><Form.Check
            type="switch"
            id={`toggle-${title}`}
            label={title}
            checked={showProgress}
            onChange={toggleProgress}
          /></Card.Title>
      

       { showProgress && 
          
       
       
       
       <ProgressBar  now={progress} label={`${level} / ${maxLevel}`} 
       animated style={{ animation: "progress-bar-fill 1s forwards"
       
       }} />
       
       }
       </Card.Body>
    </Card>
  );
}
   */    
       

const App =()=> {
  return (
    <>
    <Header/>
    <Containers/>

   {/*<div className="container"> 
    <LevelBox title="Level 1" level={0.07} maxLevel={10} />
        <LevelBox title="Level 2" level={2.5} maxLevel={10} />
        <LevelBox title="Level 3" level={5} maxLevel={10} />
        <LevelBox title="Level 4" level={7.5} maxLevel={10} />
  </div>)*/}
    </>
  );
}



 


export default App;