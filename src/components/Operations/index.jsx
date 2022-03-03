import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { oneLess, oneMore } from "../../store/modules/action"

export const Operations = () => {
    const num = useSelector((state)=>state.num);
    const dispatch = useDispatch();
    
    const handleLess = () => {
        dispatch(oneLess())
    }
    const handleMore = () => {
        dispatch(oneMore())
    }

   return(
   <div>
        <p>
            {num}
        </p>
        <button onClick={()=>handleLess()}>Menos Um</button>
        <button onClick={()=>handleMore()}>Mais Um</button>
        
    </div>)
}