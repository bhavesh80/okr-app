import { useState } from "react";

function App() {
  const [objectives, setObjectives] = useState<string[]>([]);
  const [newObjective, setNewObjective] = useState<string>("");

  function addObjective() {
    setObjectives((previous) => [...previous, newObjective]);
  }

  return (
    <div className="border px-4 py-8 space-y-4">
      <div className="space-x-4">
        <input
          className="border"
          type="text"
          placeholder="Enter objective"
          onChange={(e) => setNewObjective(e.target.value)}
        />
        <button
          className="bg-blue-400 px-2 py-1 rounded-md text-white hover:bg-blue-500 ring-gray-800 ring-2"
          onClick={addObjective}
        >
          Add Objective
        </button>
      </div>
      <div>
        {objectives.length > 0 ? (
          objectives.map((objective) => {
            return <p>{objective}</p>;
          })
        ) : (
          <span>No objectives to display</span>
        )}
      </div>
    </div>
  );
}

export default App;
