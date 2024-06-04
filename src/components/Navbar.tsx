import { useEffect, useState } from "react";
import { Node, useNodes,  } from "reactflow";

function Navbar() {
  const [showError, setShowError] = useState<string | null>("");
  const [error, setError] = useState<boolean>(false)
  const nodes: Node[] = useNodes()
  useEffect(() => {
    if (error) {
      setShowError("Cannot save Flow");

      const timeout = setTimeout(() => {
        setShowError(null);
        setError(false)
      }, 5000);

      return () => clearTimeout(timeout);
    } else {
      // Clear the error message when there's no error
      setShowError(null);
    }
  }, [error]);

  const checkEmptyTargetNodes = () => {
    const nodesWithEmptyTargets = nodes.filter(
      (node) => node.data && node.data.targetNode === ""
    );
    if (nodesWithEmptyTargets.length > 1) {
      console.error("Error: More than one node has empty target handles");
      setError(true);
    }
    console.log(nodes[0].data)
    if(nodesWithEmptyTargets.length > 1 && nodes[0].data.targetNode === ''){
      console.error("Error: More than one node has empty target handles");
      setError(true);
    }
  }
  const onSave = () => {
    if (nodes.length <= 1) {
      // No need to check for empty targets if there's only one node
      console.log("Save operation successful");
      setError(false);
      return;
    }
    checkEmptyTargetNodes()
  }

  return (
    <div className="py-2 bg-[#f3f3f3] flex items-center justify-center">
      {/* conditionally renders the settings panel or the nodes selector panel */}
      {showError && (
        <div
          className="bg-[#FCCCCB] rounded-md 
            text-black font-bold py-2 px-4 
            fixed top-1"
        >
          {showError}
        </div>
      )}
      <div className="flex-grow"></div>
      <button
        className=" px-6 py-1 border-2 border-[#8890c0] 
          rounded-md text-[#444d8a] 
          font-semibold bg-white
          mr-6 md:mr-12 lg:mr-20"
        onClick={onSave}
      >
        Save Changes
      </button>
    </div>
  )

}

export default Navbar;