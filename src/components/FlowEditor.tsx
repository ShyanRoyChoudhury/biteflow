import ReactFlow, { Background, Controls } from "reactflow";
import 'reactflow/dist/style.css';

function FlowEditor(){
    return(
        <div style={{ height: '90vh', width:'100%' }}>
            <ReactFlow>
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default FlowEditor;