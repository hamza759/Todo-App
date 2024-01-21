/* eslint-disable react/prop-types */
import Listchild from "./todolistchild"
const Todolist = ({ data,dltitem }) => {
    return <>
             
             {data.map((value) => (
                <Listchild  key={value.id || `${value.name}-${value.date}` }
                 listname={value.name}
                listdate={value.date} delchild={dltitem}></Listchild>
             ))}
      

    </>
}
export default Todolist