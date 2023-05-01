// import React , {useState} from "react";

export default function About(props) {

    // const [ mystyle, setstyle ] = useState({
    //     color: 'black',
    //     backgroundColor : 'white'
    // })

    // const [btntext , setbtntext] = useState("Enable Dark mode");

    // const  doaction = ()=>{
    //     if (mystyle.color ==='black'){
    //       setstyle({
    //         color: 'white',
    //         backgroundColor : 'black'
    //     })
    //       setbtntext("Enable Light mode");
    //     }
    //     else{
    //       setstyle({
    //         color: 'black',
    //         backgroundColor : 'white'
    //       })
    //       setbtntext("Enable Dark mode");
          
    //     }
    // }
  
    
  return (
    <>
    <div className="container">
        <h1 className="my-5" style={{ color: props.mode === "light"?"black":"white" }}>About us</h1>
        <p className="my-1 px-2" style={{ color: props.mode === "light" ? "black" : "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos, officia corrupti error obcaecati voluptas in quo, expedita consequatur, harum ipsam iste omnis vero. Modi beatae expedita quo cupiditate dolores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt pariatur quidem nobis facere, est quisquam soluta dolor impedit, neque ipsa quis maxime natus porro? Iste magni iusto commodi voluptatem labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est voluptates ratione magnam, exercitationem assumenda numquam eius rem. Architecto consectetur accusamus, amet repellat debitis deleniti magni eaque quod unde molestiae!.</p>
        
        <p className="my-1 px-2" style={{ color: props.mode === "light" ? "black" : "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos, officia corrupti error obcaecati voluptas in quo, expedita consequatur, harum ipsam iste omnis vero. Modi beatae expedita quo cupiditate dolores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt pariatur quidem nobis facere, est quisquam soluta dolor impedit, neque ipsa quis maxime natus porro? Iste magni iusto commodi voluptatem labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est voluptates ratione magnam, exercitationem assumenda numquam eius rem. Architecto consectetur accusamus, amet repellat debitis deleniti magni eaque quod unde molestiae!.</p>

        {/* <button onClick={doaction} className="btn btn-outline-info my-3">{btntext}</button> */}
     </div>
    </>
  );
}
