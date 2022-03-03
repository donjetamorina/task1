import { Data1, Data2 } from "./first-task/date";

import './first-task/first.scss'
import './first-task/second.scss'

  function App()  {
  return  (
       
 <div className="All">
      <div className="first-task">
          {Data1.map((props) => {
            return(
              <div className="item1">
                <div className="icon">{props.icon}</div>
                <div className="block">
                  <h6>{props.tittle}</h6>
                  <p>{props.paragraf}</p>
                </div>
            </div>
            )
          })}
      </div>
      
      <div className="second-cards">
        {Data2.map((props) => {
          return(
            <div className="card1">
                <div className="info">
                    <div className="date">{props.number}</div>
                    <div className="inline">
                      <div className="category" style={{background: `${props.color}`}}>{props.button}</div>
                      <div className="profile"></div>
                      <span>Kevin Joe</span>
                    </div>
                    <p>{props.text}</p>
                  </div>

                  <button>Download</button>
            </div>
          )
        })}
      </div>
    </div>
  );
  
}


export default App;
