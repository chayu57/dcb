import { Card, Input } from "react-rainbow-components";
import "./Containers.css";
import { ProgressBar, Form, Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../images/image1.jpg";



const Containers = () => {
    const [waterlevel, setWaterlevel] = useState();
    const [motorstatus, setMotorstatus] = useState();
    const rock = () => {
        let message;
        if (waterlevel === 1) {
          message = "1 FEET";
        } else if (waterlevel === 0.25) {
          message = "0.25 FEET";
        } else if (waterlevel === 0.5) {
          message = "0.5 FEET";
        } else if (waterlevel === 0.75) {
          message = "0.75 FEET";
        } else {
          message = "loading";
        }
      
        
        if ('speechSynthesis' in window) {
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(message);
          synth.speak(utterance);
        }
      
        return <h5>{message}</h5>;
      };
      
    useEffect(() => {
      setInterval(() => {
          fetch("https://underpassbackend.onrender.com/api/sensordata")
              .then(async result => {
                  const data = await result.json();
                  setWaterlevel(data.waterlevel);
                  setMotorstatus(data.motorstatus);
                  
              })
              .catch(error => {
                  console.error(error);
              });
      }, 2000);
  }, []);

  


  const LevelBox=({ title, level, maxLevel }) =>{
    const progress = (level / maxLevel) * 100;
    const title1= rock();
    return (
         <ProgressBar  now={progress} label={title1 || title} animation={{
            enable: true,
            duration: 2000,
            delay: 0
        }}
          />
   
    );
  }
    
 

    return (
        <div>
            <Card className="parent__card">
                <Card className="child__card1">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LOCATION 1
                        </div>
                    </div>
                    <div>
                    <img src={logo} className="App-logo" alt="logo" style={{height: 200, width: 500,marginTop:-250}} /></div>
                    <div className="container1"> 
    
                    <LevelBox title="NO WATER" level={waterlevel} maxLevel={1} />
                     </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">WATERLEVEL</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={waterlevel} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                        <div className="col-6">
                            <p className="col__text">MOTOR STATUS</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={motorstatus} className="rainbow-p-around_medium  input__text box abc" disabled />
                        </div>
                    </div>
                </Card>
                <Card className="child__card2">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LOCATION 2
                        </div>
                    </div>
                    <div>
                    <img src={logo} className="App-logo" alt="logo" style={{height: 200, width: 500,marginTop:-250}} /></div>
                    <div className="container2" >
                    <LevelBox title="NO WATER" level={waterlevel} maxLevel={1} />
                     </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">WATERLEVEL</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={waterlevel} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                        <div className="col-6">
                            <p className="col__text">MOTOR STATUS</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={motorstatus} className="rainbow-p-around_medium  input__text box abc" disabled />
                        </div>
                    </div>
                    
                    
                    
                </Card>
                <Card className="child__card3">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LOCATION 3
                        </div>
                    </div>
                    <div>
                    <img src={logo} className="App-logo" alt="logo" style={{height: 200, width: 500,marginTop:-250}} /></div>
                    <div className="container3">
    
                    <LevelBox title="NO" level={waterlevel} maxLevel={1} />
                     </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">WATERLEVEL</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={waterlevel} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                        <div className="col-6">
                            <p className="col__text">MOTOR STATUS</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={motorstatus} className="rainbow-p-around_medium  input__text box abc" disabled />
                        </div>
                    </div>
                    
                    
                    
                    
                    
                </Card>
            </Card>
                
            
        </div>
    );
};  
export default Containers;

