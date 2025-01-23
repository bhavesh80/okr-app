import {Plus} from "lucide-react";
import {KeyResultType, ObjectiveType} from "../types/okr-types.ts";
import React, {useState} from "react";
import ObjectiveInput from "./ObjectiveInput.tsx";
import KeyResultForm from "./KeyResultForm.tsx";
import AddObjectiveButton from "./AddObjectiveButton.tsx";

type CreateOkrFormProps = {
    setObjectives: React.Dispatch<React.SetStateAction<Omit<ObjectiveType, "id">[] | null>>,
    objectives: Omit<ObjectiveType, "id">[]
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


    return (
        <div className="border-2 border-gray-300 rounded-md py-4 px-8 max-w-2xl">
        <span className="block mb-8 font-semibold text-2xl">
          Create Objective Form
        </span>

            <ObjectiveInput setNewObjective={setNewObjective}/>

            <div className="space-y-4">
                <span className="font-normal text-xl block">Key Results</span>
                {keyResults.map((keyResult, index) => (
                    <KeyResultForm
                        key={index}
                        index={index}
                        keyResult={keyResult}
                        keyResults={keyResults}
                        setKeyResults={setKeyResults}
                    />
                ))}

                <button
                    className="flex mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={addKeyResult}
                >
                    <Plus className="mr-2"/>
                    <span>Add Key Result</span>
                </button>
                <AddObjectiveButton newObjective={newObjective} keyResults={keyResults} setObjectives={setObjectives}
                                    objectives={objectives}/>
            </div>
        </div>
    );
}
export default CreateOkrForm
