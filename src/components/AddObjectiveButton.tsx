import React, { useContext } from "react";
import { InsertObjectiveType, KeyResultType, ObjectiveType } from "../types/okr-types.ts";
import { getOKRs, insertOKR } from "../db/okr-store.ts";
import { OkrContext } from "../providers/OkrProvider.tsx";

type AddObjectiveButtonProp = {
  newObjective: string;
  keyResults: KeyResultType[];
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[] | null>>;
  objectives: Omit<ObjectiveType, "id">[];
};

const AddObjectiveButton = ({
  newObjective,
  keyResults,
}: AddObjectiveButtonProp) => {
  const { setObjectives } = useContext(OkrContext);

  const addObjective = async () => {
    const newObjectiveToBeAdded: InsertObjectiveType = {
      title: newObjective,
      keyResults: keyResults,
    };
    await insertOKR(newObjectiveToBeAdded);
    const updatedOkrs = await getOKRs();
    setObjectives(updatedOkrs);
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
  );
};
export default AddObjectiveButton;
