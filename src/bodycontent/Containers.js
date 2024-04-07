import { Card, Input } from "react-rainbow-components";
import "./Containers.css";

import { useEffect, useState } from "react";




const Containers = () => {
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [v3, setV3] = useState();
    const [i1, setI1] = useState();
    const [i2, setI2] = useState();
    const [i3, setI3] = useState();
   
      
    useEffect(() => {
      setInterval(() => {
          fetch("https://dc-board.onrender.com/api/sensordata")
              .then(async result => {
                  const data = await result.json();
                  setV1(data.v1);
                  setV2(data.v2);
                  setV3(data.v3);
                  setI1(data.i1);
                  setI2(data.i2);
                  setI3(data.i3);
                  
              })
              .catch(error => {
                  console.error(error);
              });
      }, 2000);
  }, []);

    

    return (
        <div>
            
                <Card className="child">
                    <div className="row row__card">


                        <div className="down">
                            <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v1)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v1} className="xy " disabled />
                        </div>
                        </div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v2} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Voltage(v3)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={v3} className="xy" disabled />
                        </div></div>
                        </div>



                       <div  className="side">
                       <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i1)          </p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i1} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i2} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">Current(i3)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i3} className="xy" disabled />
                        </div>
                        </div>
                        </div>


                        <div  className="three">
                       <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">power(w1)          </p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i1*v1} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">power(w2)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i2*v2} className="xy" disabled />
                        </div></div>
                        <div className="arrange">
                        <div className="col-6">
                            <p className="col__text">power(w3)</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={i3*v3} className="xy" disabled />
                        </div>
                        </div>
                        </div>
                    </div>
                </Card>
                
            
                
            
        </div>
    );
};  
export default Containers;

