import {useContext} from "react";
import {OkrContext} from "../providers/OkrProvider.tsx";

const useDeleteObjective = () => {
    const {objectives, setObjectives} = useContext(OkrContext);

    const deleteObjectivesKeyResult = (
        objectiveIndex: string,
        keyResultIndex: number
    ) => {
        const updatedObjectives = objectives!.map((objective) => {
            if (objective.id === objectiveIndex) {
                const updatedKeyResults = objective.keyResults.filter(
                    (_, krIndex) => krIndex !== keyResultIndex
                );
                return {...objective, keyResults: updatedKeyResults};
            }
            return objective;
        });

        setObjectives(updatedObjectives);
    };

    const deleteObjective = (objectiveIndex: string) => {
        const updatedObjectives = objectives!.filter(
            (objective) => objective.id !== objectiveIndex
        );
        setObjectives(updatedObjectives);
    };

    return {deleteObjective, deleteObjectivesKeyResult};

}

export {useDeleteObjective};