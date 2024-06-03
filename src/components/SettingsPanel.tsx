
import { FiArrowLeft } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store";
import { useEffect, useState } from "react";
import { Node } from "reactflow";
import { setClickedNode, updateNodeText } from "../features/nodeSlice";

function SettingsPanel() {
    const nodes = useSelector((state: RootState)=> state.node.nodes);
    const clickedNodeId = useSelector((state: RootState)=> state.node.clickedNodeId);
    const dispatch: AppDispatch = useDispatch();
    const [input, setInput ] = useState<string>('');
    useEffect(()=>{
        const node = nodes.find((node: Node)=>node.id === clickedNodeId);
        if(node){
            setInput(node.data.text)
        }
    }, [clickedNodeId, nodes])

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setInput(e.target.value)
        if(clickedNodeId)
        dispatch(updateNodeText({id: clickedNodeId, newText: e.target.value}))
    }
    const handleClose = ()=> {
        dispatch(setClickedNode(null))
    }
  return (
    <div
      className="w-full h-full"
    >
      <div className="flex items-center justify-center px-2.5 py-2">
        <p className="text-sm border border-transparent hover:border-[#E3E3E3] hover:shadow-md p-1"
        onClick={handleClose}>
          <FiArrowLeft />
        </p>
        <p className="mx-auto  text-sm">Message</p>
      </div>

      <div className="relative flex  items-center">
        <div className="flex-grow border-t border-[#E3E3E3]"></div>
      </div>

      <form className="p-2.5">
        <p className="text-[#a3a3a3] text-sm pt-2">Text</p>
        <textarea
          value={input}
          onChange={handleOnChange}
          className="outline outline-[#E3E3E3] w-full rounded-md p-2 mt-2"
        />
      </form>

      <div className="relative flex py-2 items-center mt-2">
        <div className="flex-grow border-t border-[#E3E3E3]"></div>
      </div>
    </div>
  )
}

export default SettingsPanel