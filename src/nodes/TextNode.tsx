import { BiMessageRoundedDetail } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { Handle, Node, Position } from "reactflow"
import { AppDispatch, RootState } from "../store";
import { setClickedNode, updateNodeText } from "../features/nodeSlice";
import { useEffect, useState } from "react";


function TextNode({id}: {
  id: string;
}): React.ReactElement {
  const [ input, setInput ] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  const textBoxInput = useSelector((state: RootState)=> {
    const node = state.node.nodes.find((node: Node)=> node.id === id)
    return node ? node.data.text : '';
  });

  useEffect(()=>{ setInput(textBoxInput)}, [textBoxInput])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setInput(newText)
    dispatch(updateNodeText({id, newText }))
  }

  const handleNodeClick = () => {
    dispatch(setClickedNode(id))
  }
  
  return (
    <div className={`MessageNode flex flex-col border border-black rounded-lg 
    shadow-2xl overflow-hidden bg-white 
      clickedNodeId === data.id ? "border-[#444d8a] border-2" : ""
     `}
     onClick={handleNodeClick}>
      <div className="flex items-center gap-1 bg-[#b2f1e2] font-semibold text-sm py-[0.5px] px-2">
        <div>
          <BiMessageRoundedDetail />
        </div>
        <p>Send Message</p>
      </div>
      <div className="px-2 py-2">
        <input
          id="text"
          name="text"
          onChange={handleInput}
          value={input}
          className="nodrag outline-none"
          placeholder="text message"
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
      />
      <Handle
        type="target"
        position={Position.Left}
      />
    </div>
  )
}

export default TextNode