
import ReactFlow, { Background, Controls, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import nodeTypes from "../nodes";


const initialNodes = [
    {
      id: "1",
      type: "TextNode",
      position: { x: 150, y: 400 },
      data: {},
    },
    {
      id: "2",
      type: "SourceBlock",
      position: { x: 100, y: 100 },
      data: {},
    },
    {
      id: "3",
      type: "SequenceStart",
      position: { x: 100, y: 300 },
      data: {},
    },
  ] ;
function FlowEditor(){
    const [nodes, setNodes, onNodeChange ] = useNodesState(initialNodes);

    return(
        <div style={{ height: '90vh', width:'100%' }}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodeChange}
            >
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default FlowEditor;