import NodesPanel from "./NodesPanel"
import SettingsPanel from "./SettingsPanel"

function SidePanel() {
  return (
    <div className="border shadow-lg rounded-sm h-screen w-48 md:w-56 lg:w-80 bg-white border-[#E3E3E3]">
        <NodesPanel />
        <SettingsPanel />
    </div>
  )
}

export default SidePanel