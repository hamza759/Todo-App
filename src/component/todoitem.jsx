/* eslint-disable react/prop-types */
import { useRef } from "react"
const Todoitem = ({additem}) => {


const nameref = useRef("")
const dateref = useRef("")


function btncliked() {
    // e.preventDefault()
  const username = nameref.current.value  
  const userdate = dateref.current.value  
  nameref.current.value = "" 
  dateref.current.value = ""
    additem(username,userdate)
}

    return <>
      {/* <form className="grid" action="" onSubmit={btncliked}> */}
        <input
            className="outline-none 
             text-black md:h-10 md:w-64 p-5  h-10
              rounded-xl " type="text"
              ref={nameref}
            placeholder="Your Name" />
        <input
            className="outline-none
             text-black md:h-10 md:w-64 p-5  h-10 
              rounded-xl "
               ref={dateref}
               type="date" />
              
        <button
            className="outline-none h-10 w-1/3  
             rounded-xl text-sm transition ease-in-out delay-150
               hover:-translate-y-1 hover:scale-110
                hover:bg-purple-800 duration-600 
                 font-bold bg-purple-900" type="submit" onClick={btncliked} > Add Me</button>
        {/* </form> */}
    </>
}
export default Todoitem