import { BiMessageRoundedDetail } from "react-icons/bi";

const nodeTypes = [
    {
      icon: <BiMessageRoundedDetail size={40} />,
      text: "Message",
      type: "message",
    },
    // Add more node types here to render in sidepanel
  ];

function NodesPanel() {
  return (
    <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* mapping the various types types in this component based on the properties */}
            {nodeTypes.map((nodeType, index) => (
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



function RenderNodeSelectorPanel({ icon, text, type }) {
    return (
      <div
        className="flex flex-col p-2 items-center justify-center text-[#8890c0] border-[#8890c0] border"
      >
        <p>{icon}</p>
        <p>{text}</p>
      </div>
    )
  }

export default NodesPanel