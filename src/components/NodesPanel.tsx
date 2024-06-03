import { BiMessageRoundedDetail } from "react-icons/bi";

const renderNodeTypes = [
    {
      icon: <BiMessageRoundedDetail size={40} />,
      text: "Message",
      type: "TextNode",
    },
    // Add more node types here to render in sidepanel
];

function NodesPanel() {
  return (
    <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* mapping the various node types types in nodes selector panel  */}
            {renderNodeTypes.map((nodeType, index) => (
              <RenderNodeSelectorPanel
                key={index}
                icon={nodeType.icon}
                text={nodeType.text}
                type={nodeType.type}
              />
            ))}
          </div>
    </div>
  )
}

const onDragStart = ({event, nodeType}: {
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
}) =>{
    if(nodeType){
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = 'move'
    }
}

function RenderNodeSelectorPanel({ icon, text, type }) {
    const renderDragStart = (event: React.DragEvent<HTMLDivElement>) =>
        onDragStart({event, nodeType:type}); 
    return (
      <div
        className="flex flex-col p-2 items-center justify-center text-[#8890c0] border-[#8890c0] border"
        onDragStart={renderDragStart}
        draggable
      >
        <p>{icon}</p>
        <p>{text}</p>
      </div>
    )
  }

export default NodesPanel