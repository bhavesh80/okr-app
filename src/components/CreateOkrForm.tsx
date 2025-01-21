import {Plus} from "lucide-react";
import {KeyResultType, ObjectiveType} from "../types/okr-types.ts";
import {useState} from "react";

type CreateOkrFormProps = {
    setObjectives: (objectives: ObjectiveType[]) => void,
    objectives: ObjectiveType[]
}

const CreateOkrForm = ({
                           setObjectives,
                           objectives
                       }: CreateOkrFormProps) => {
    const [newObjective, setNewObjective] = useState<string>("");

    const [keyResults, setKeyResults] = useState<KeyResultType[]>([
        {
            title: "",
            initialValue: 0,
            currentValue: 0,
            targetValue: 0,
            metrics: "",
        },
    ]);


    const addObjective = () => {
        setObjectives([
            ...objectives,
            {title: newObjective, keyResults: keyResults},
        ]);
    };
    const addKeyResult = () => {
        setKeyResults([
            ...keyResults,
            {
                title: "",
                initialValue: 0,
                currentValue: 0,
                targetValue: 0,
                metrics: "",
            },
        ]);
    };
    const updateKeyResult = (
        index: number,
        field: string,
        value: string | number
    ) => {
        const updatedKeyResults = keyResults.map((kr, i) => {
            if (i === index) {
                return {...kr, [field]: value};
            }
            return kr;
        });
        setKeyResults(updatedKeyResults);
    };

    const deleteKeyResult = (index: number) => {
        setKeyResults(keyResults.filter((_, i) => index !== i));
    };
    return (
        <div className="border-2 border-gray-300 rounded-md py-4 px-8 max-w-2xl">
        <span className="block mb-8 font-semibold text-2xl">
          Create Objective Form
        </span>

            <div className="mb-8">
                <label htmlFor="objective" className="font-normal text-xl block mb-4">
                    Objective
                </label>
                <input
                    className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                    type="text"
                    id="objective"
                    placeholder="Enter objective title"
                    onChange={(e) => setNewObjective(e.target.value)}
                    required
                />
            </div>
            <div className="space-y-4">
                <span className="font-normal text-xl block">Key Results</span>
                {keyResults.map((keyResult, index) => (
                    <div className="border border-1 p-4 bg-gray-50" key={index}>
                        <div className="space-y-4">
                            <input
                                className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                                type="text"
                                id="title"
                                placeholder="Key Results Title"
                                value={keyResult.title}
                                onChange={(e) =>
                                    updateKeyResult(index, "title", e.target.value)
                                }
                                required
                            />
                            <div className="flex space-x-4 w-fit">
                                <input
                                    className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                                    type="number"
                                    id="initialValue"
                                    placeholder="Inital Value"
                                    required
                                    onChange={(e) =>
                                        updateKeyResult(index, "initialValue", e.target.value)
                                    }
                                />{" "}
                                <input
                                    className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                                    type="number"
                                    id="currentValue"
                                    placeholder="Current Value"
                                    required
                                    onChange={(e) =>
                                        updateKeyResult(index, "currentValue", e.target.value)
                                    }
                                />{" "}
                                <input
                                    className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                                    type="number"
                                    id="targetValue"
                                    placeholder="Target Value"
                                    required
                                    onChange={(e) =>
                                        updateKeyResult(index, "targetValue", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input
                                        className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                                        type="string"
                                        id="metrics"
                                        placeholder="Metrics"
                                        required
                                        onChange={(e) =>
                                            updateKeyResult(index, "metrics", e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="mt-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => deleteKeyResult(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className="flex mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={addKeyResult}
                >
                    <Plus className="mr-2"/>
                    <span>Add Key Result</span>
                </button>
                <div className="flex justify-end">
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={addObjective}
                    >
                        Add Objective
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CreateOkrForm
