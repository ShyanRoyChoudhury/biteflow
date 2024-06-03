import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Node } from "reactflow";

interface nodeState {
    nodes: Node[],
    clickedNodeId: string | null
}
const initialState: nodeState = {
    nodes: [],
    clickedNodeId: null
};

const nodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers:{
        updateNodeText: (state, action: PayloadAction<{id:string, newText: string}>) => {
            const { id, newText } = action.payload;
            const node = state.nodes.find((node)=> node.id === id);
            if(node){
                node.data.text = newText;
            } else {
                // If the node doesn't exist, create a new one and add it to the state
                const newNode: Node = { id, data:{ text: newText} };
                state.nodes = [...state.nodes, newNode];
            }
        },
        setClickedNode: (state, action: PayloadAction<string | null>) => {
            state.clickedNodeId = action.payload
        }
    }
})

export const { updateNodeText, setClickedNode } = nodeSlice.actions;
export default nodeSlice.reducer;