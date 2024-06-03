import { BiMessageRoundedDetail } from "react-icons/bi"
import { Handle, Position } from "reactflow"

function TextNode(): React.ReactElement {
  return (
    <div>
      <div className="flex items-center gap-1 bg-[#b2f1e2] font-semibold text-sm py-[0.5px] px-2">
        <div>
          <BiMessageRoundedDetail />
        </div>
        <p>Send Message</p>
      </div>
      <div className="px-2 py-2">
        <input
          id="text"
          name="text"
          // onChange={handleInput}
          // value={inputValue}
          className="nodrag outline-none"
          placeholder="text message"
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        // isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        // isConnectable={isConnectable}
      />
    </div>
  )
}

export default TextNode