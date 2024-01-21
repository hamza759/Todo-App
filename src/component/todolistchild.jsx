
// eslint-disable-next-line react/prop-types
const Listchild=({listname,listdate,delchild})=>{
    return <>
        
          <div className="md:h-10 md:w-64 pt-2 text-center  font-bold ">
               {listname}
          </div>

          <div className="md:h-10 md:w-64 pt-2 text-center  font-bold  ">
               {listdate}
          </div>
          <div  >
          <button className="outline-none h-10 w-1/3  rounded-xl text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-purple-800 duration-600  font-bold bg-purple-900" onClick={()=> delchild(listname)} > Delete </button>
          </div>
            
        
    </>
}
export default Listchild