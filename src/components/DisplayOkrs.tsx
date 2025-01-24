import { PackageOpen, Trash2, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { KeyResultType } from "../types/okr-types.ts";
import AddKeyResultModal from "./AddKeyResultModal.tsx";
import { deleteOKR, getOKRs } from "../db/okr-store.ts";
import { OkrContext } from "../providers/OkrProvider.tsx";

const DisplayOkrs = () => {
  const { objectives, setObjectives } = useContext(OkrContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedObjectiveIndex, setSelectedObjectiveIndex] = useState<
    string | null
  >(null);

  const deleteObjectivesKeyResult = (
    objectiveIndex: string,
    keyResultIndex: number
  ) => {
    const updatedObjectives = objectives!.map((objective) => {
      if (objective.id === objectiveIndex) {
        const updatedKeyResults = objective.keyResults.filter(
          (_, krIndex) => krIndex !== keyResultIndex
        );
        return { ...objective, keyResults: updatedKeyResults };
      }
      return objective;
    });

    setObjectives(updatedObjectives);
  };

  const deleteObjective = async (objectiveId: string) => {
    try {
      await deleteOKR(objectiveId);
      const updatedOKRs = await getOKRs();
      setObjectives(updatedOKRs);
    } catch (error) {
      alert(error);
    }
  };

  const addKeyResultToObjective = (keyResult: KeyResultType) => {
    if (selectedObjectiveIndex !== null) {
      const updatedObjectives = objectives!.map((objective) => {
        if (objective.id === selectedObjectiveIndex) {
          return {
            ...objective,
            keyResults: [...objective.keyResults, keyResult],
          };
        }
        return objective;
      });
      setObjectives(updatedObjectives);
    }
  };

  return (
    <div id="show-okr" className="border-2 border-gray-300 rounded-md p-4">
      {objectives!.length > 0 ? (
        objectives!.map((objective) => (
          <div key={objective.id} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-2xl">{objective.title}</span>
              <div className="flex space-x-2">
                <button
                  className="flex items-center mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => {
                    setSelectedObjectiveIndex(objective.id);
                    setIsModalOpen(true);
                  }}
                >
                  <Plus className="mr-2" />
                  <span>Add Key Result</span>
                </button>
                <button
                  className="flex items-center mt-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => deleteObjective(objective.id)}
                >
                  <Trash2 className="mr-2" />
                  <span>Delete Objective</span>
                </button>
              </div>
            </div>
            <div>
              {objective.keyResults.map((keyResult, krIndex) => (
                <div
                  key={krIndex}
                  className="bg-gray-100 rounded-md p-4 space-y-4 mt-4"
                >
                  <div className="space-x-2">
                    <span className="font-medium text-lg">KR:</span>
                    <span className="text-lg">{keyResult.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-normal">
                      Initial Value: {keyResult.initialValue}
                    </span>
                    <span className="font-normal">
                      Current value: {keyResult.currentValue}
                    </span>
                    <span className="font-normal">
                      Target Value: {keyResult.targetValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Metrics: {keyResult.metrics}</span>
                    <button
                      className="mt-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() =>
                        deleteObjectivesKeyResult(objective.id, krIndex)
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <PackageOpen strokeWidth={1} className="h-24 w-24" />
          <span>No objectives to display</span>
        </div>
      )}
      <AddKeyResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddKeyResult={addKeyResultToObjective}
      />
    </div>
  );
};

export default DisplayOkrs;
