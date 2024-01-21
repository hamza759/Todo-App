import Todoitem from "./component/todoitem"
import Todolist from "./component/todolist"
import { useState } from "react"
function App() {

  // const userdata = [
  //   {
  //     name: "hamza",
  //     date: "01.02.2000",
  //   },
  //   {
  //     name: "ali",
  //     date: "02.02.2000",
  //   },
  //   {
  //     name: "farhan",
  //     date: "04.02.2000",
  //   }
  // ]

  let [userdata,setuserdata] = useState([])
   
  function addinlist(itemname,itemdate) {
    let newdata = [...userdata,{name:itemname,date:itemdate}]
    setuserdata(newdata)
  }
  function ondelet(datainlist) {
    const del = userdata.filter((value) =>  value.name != datainlist )
    setuserdata(del)
  }

  return (

    <div className="min-h-screen w-screen  bg-purple-700">
      
      <div className="flex  items-center justify-center flex-col gap-10  ">
        <h1 className="font-bold text-5xl mt-10 ">Todo App</h1>

        <div className="h-5/6 w-4/5  grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2 mt-5   text-white">

          <Todoitem additem={addinlist} ></Todoitem>
        
          <Todolist data={userdata}  dltitem={ondelet}></Todolist>


        </div>
      </div>
    </div>


  )
}

export default App
