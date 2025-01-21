import {PackageOpen, Trash2} from "lucide-react";
import {ObjectiveType} from "../types/okr-types.ts";

type DisplayOkrsProps = {
    objectives: ObjectiveType[],
    setObjectives: (objectives: ObjectiveType[]) => void
}

const DisplayOkrs = ({
                         objectives,
                         setObjectives
                     }: DisplayOkrsProps) => {
    const deleteObjectivesKeyResult = (
        objectiveIndex: number,
        keyResultIndex: number
    ) => {
        const updatedObjectives = objectives.map((objective, index) => {
            if (index === objectiveIndex) {
                const updatedKeyResults = objective.keyResults.filter(
                    (_, krIndex) => krIndex !== keyResultIndex
                );
                return {...objective, keyResults: updatedKeyResults};
            }
            return objective;
        });

        setObjectives(updatedObjectives);
    };

    return (
        <div id="show-okr" className="border-2 border-gray-300 rounded-md p-4">
            {objectives.length > 0 ? (
                objectives.map((objective, objectiveIndex) => (
                    <div key={objectiveIndex} className="p-4 space-y-4">
                        <span className="font-semibold text-2xl">{objective.title}</span>
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
                                                deleteObjectivesKeyResult(objectiveIndex, krIndex)
                                            }
                                        >
                                            <Trash2 className="h-4 w-4"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <div className="flex flex-col justify-center">
                        <PackageOpen strokeWidth={1} className="h-24 w-24"/>
                        <span>No objectives to display</span>
                    </div>
                </div>
            )}
        </div>
    )
}
export default DisplayOkrs
