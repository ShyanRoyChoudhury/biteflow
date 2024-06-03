
import ReactFlow, { Background, Connection, Controls, Node, ReactFlowInstance, addEdge, useEdgesState, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import nodeTypes from "../nodes";
import { useCallback, useState } from "react";


const initialNodes = [
    {
      id: "1",
      type: "TextNode",
      position: { x: 150, y: 400 },
      data: {
        text: ""
   },
    },
  ] satisfies Node[];

  function FlowEditor(){
    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      // react drag element
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }, []);



    const [nodes, setNodes, onNodeChange ] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          const type = event.dataTransfer.getData("application/reactflow");
          // check if the dropped element/position is valid 
          if (typeof type === "undefined" || !type || !reactFlowInstance) {
            return;
          }
    
          // Get the position from reactFlowInstance
          const position = reactFlowInstance.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          });
    
          // Check if position is available
          if (!position) {
            return;
          }
    
          // creating a newNode which is created on drop event
          const newNode = {
            id: "node-" + Math.random(),
            type,
            position,
            data: {
              text: "",
              targetNode: "",
            },
          };
          setNodes((nds) => [...nds, newNode]);
        },
        [reactFlowInstance, setNodes]
      );
    
      const onConnect = useCallback(
        (connection: Connection) => {
          setEdges((eds) => addEdge(connection, eds));
          // Get the IDs of the source and target nodes
          const sourceNodeId = connection.source;
          const targetNodeId = connection.target;
    
          // Find the source and target nodes in the nodes array
          const sourceNode = nodes.find((node) => node.id === sourceNodeId);
          const targetNode = nodes.find((node) => node.id === targetNodeId);
            
          if (sourceNode && targetNode) {
            // Update the edges array for the source node

            //@ts-expect-error adding target node data 
            sourceNode.data.targetNode = connection.target;
    
            // Update the nodes state to reflect the changes
            setNodes((prevNodes) => [
              ...prevNodes.filter(
                (node) => node.id !== sourceNodeId && node.id !== targetNodeId
              ),
              sourceNode,
              targetNode,
            ]);
          }
        },
        [nodes, setEdges, setNodes]
      );
    return(
        <div style={{ height: '90vh', width:'100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodeChange}
                onEdgesChange={onEdgesChange}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onInit={setReactFlowInstance}
                onConnect={onConnect}
            >
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default FlowEditor;