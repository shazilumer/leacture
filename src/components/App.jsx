import React from "react";
import "./App.css";
import Props from "./Props/Props";
import State from "./State/State";
const App = () => {
  // let myName = "Ali Shabbir"
  // const intrnalstyle = {color:"red", backgroundColor:"black"}

  const arr = [
    {
      imgsrc:
        "https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80",
      title: "Toyota Supra",
      text: "toyota supra toyota automobile motor vehicle supra dot art text art ascii art. 🚗🏎️🚘. cars suv supra text art. Show Unmoderated Emojis & Text. Related Text &",
    },
    {
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteQGCgME3lkemwGtDtFiJ2bBHZ3HIkJ-Naw&usqp=CAU",
        title:"Lambergini",
        text:"Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."
    },
    {
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteQGCgME3lkemwGtDtFiJ2bBHZ3HIkJ-Naw&usqp=CAU",
        title:"Lambergini",
        text:"Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."
    },
    {
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteQGCgME3lkemwGtDtFiJ2bBHZ3HIkJ-Naw&usqp=CAU",
        title:"Lambergini",
        text:"Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."
    },
  ];
  return (
    <>
      {/* <h1 className="jdfk" style={intrnalstyle} >{myName}</h1> */}
      {/* <h1>{myName}</h1>

    <img src="https://picsum.photos/200/300" alt="" /> */}

      <div className="grid">
        {/* {
            arr.map((v,i)=>{
console.log(v)

                return(
                    <>
                    <Props imgsrc={v.imgsrc} title={v.title} text={v.text}/>
                    </>
                )
            })
        } */}
<State/>
        
      </div>
    </>
  );
};
export default App;
