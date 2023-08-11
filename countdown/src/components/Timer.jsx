import { useEffect,useState } from "react";

function Timer() {
  const[count,setCount] = useState(4)  
  useEffect(() => {
    let intervalId = setInterval(() => {
        // console.log("Hello",count)
        // setCount(count - 1) //setCount(9)
        setCount((prevCount) =>{
            if(prevCount === 1){
                clearInterval(intervalId)
                return 0;
            }
            return prevCount - 1;
        })
    },1000)
    const cleanUp = () => {
      console.log('CleanUp is called')
      clearInterval(intervalId)
    }
    return cleanUp;
  },[])
  return (
    <div className="Timer">
      {/* <h1>Header</h1> */}
      <h1>Time : {count}</h1>
    </div>
  )
}

export default Timer
