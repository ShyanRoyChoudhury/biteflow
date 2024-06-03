import FlowEditor from "../components/FlowEditor";
import SidePanel from "../components/SidePanel";


function EditorPage() {
  return (
    <div className="w-full flex" >
        <FlowEditor />
        <SidePanel />
    </div>
  )
}

export default EditorPage;