import { BiMessageRoundedDetail } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { Handle, Node, Position, useStore } from "reactflow"
import { AppDispatch, RootState } from "../store";
import { setClickedNode } from "../features/nodeSlice";
import { useEffect, useState } from "react";
import WhatsappSVG from "../assets/whatsappSVG";


function TextNode({id}: {
  id: string;
}): React.ReactElement {
  const [ input, setInput ] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();


  const textBoxInput = useSelector((state: RootState)=> {
    const node = state.node.nodes.find((node: Node)=> node.id === id)
    return node ? node.data.text : '';
  });
  const clickedNodeId = useSelector((state: RootState)=> state.node.clickedNodeId);
  
  useEffect(()=>{ setInput(textBoxInput)}, [textBoxInput])

  const handleNodeClick = () => {
    dispatch(setClickedNode(id))

  }
  const edges = useStore((store)=> store.edges);
  const isConnectable = (): boolean => {
    const sourceEdges = edges.filter((edge) => edge.source === id);
    return sourceEdges.length === 0; // Allow connection if no edge is connected
  };
  
  return (
    <div className={`MessageNode flex flex-col border  rounded-lg 
    shadow-2xl overflow-hidden bg-white ${
      clickedNodeId === id ? "border-blue-600 border-2" : ""}
     `}
     onClick={handleNodeClick}>
      <div className="flex items-center justify-between gap-1 bg-[#b2f1e2] font-semibold text-sm py-[0.5px] px-2">
        <div className="flex items-center space-x-1">
          <div>
            <BiMessageRoundedDetail />
          </div>
          <p>Send Message</p>
        </div>
        <div className="rounded-lg bg-white p-[1px]"><WhatsappSVG /></div>
      </div>
      <div className="px-2 py-2">
        <input
          id="text"
          name="text"
          // onChange={handleInput}
          readOnly
          value={input}
          className="nodrag outline-none"
          placeholder="text message"
        />
      </div>

      <Handle 
      type="source"
      position={Position.Right}
      isConnectable={isConnectable()}
      />

      <Handle
        type="target"
        position={Position.Left}
      />
    </div>
  )
}

export default TextNode