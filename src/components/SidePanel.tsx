import { useSelector } from "react-redux"
import NodesPanel from "./NodesPanel"
import SettingsPanel from "./SettingsPanel"
import { RootState } from "../store"

function SidePanel() {
    const nodeClicked = useSelector((state: RootState)=> state.node.clickedNodeId);
  return (
    <div className="border shadow-lg rounded-sm h-screen w-48 md:w-56 lg:w-80 bg-white border-[#E3E3E3]">
        {nodeClicked?
        <SettingsPanel />:
            <NodesPanel />}
    </div>
  )
}

export default SidePanel