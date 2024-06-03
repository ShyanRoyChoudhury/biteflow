import ReactFlow, { Background, Controls } from "reactflow";
import 'reactflow/dist/style.css';

function FlowEditor(){
    return(
        <div style={{ height: '95vh' }}>
            <ReactFlow>
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default FlowEditor;