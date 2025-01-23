import React from 'react'
import {KeyResultType, ObjectiveType} from "../types/okr-types.ts";
import {insertOkrToDb} from "../db/okr-store.ts";

type AddObjectiveButtonProp = {
    newObjective: string;
    keyResults: KeyResultType[];
    setObjectives:  React.Dispatch<React.SetStateAction<Omit<ObjectiveType, "id">[] | null>>;
    objectives: Omit<ObjectiveType, "id">[];
}

const AddObjectiveButton = ({
                                newObjective,
    keyResults,
    setObjectives,
    objectives,
                            }: AddObjectiveButtonProp) => {
    const addObjective = () => {
        const newObjectiveToBeAdded: Omit<ObjectiveType, "id"> = {title: newObjective, keyResults: keyResults};
        insertOkrToDb(newObjectiveToBeAdded).then(() => {
            setObjectives([
                ...objectives,
                newObjectiveToBeAdded,
            ]);
        })
    };
    return (
        <div className="flex justify-end">
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={addObjective}
            >
                Add Objective
            </button>
        </div>
    )
}
export default AddObjectiveButton
