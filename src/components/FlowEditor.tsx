import ReactFlow, { Background, Controls } from "reactflow";
import 'reactflow/dist/style.css';

function Flow(){
    return(
        <div style={{ height: '95vh' }}>
            <ReactFlow>
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow;