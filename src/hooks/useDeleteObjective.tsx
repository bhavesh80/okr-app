import {useContext} from "react";
import {OkrContext} from "../providers/OkrProvider.tsx";

const useDeleteObjective = () => {
    const {objectives, setObjectives} = useContext(OkrContext);

    const deleteObjectivesKeyResult = (
        objectiveIndex: number,
        keyResultIndex: number
    ) => {
        const updatedObjectives = objectives!.map((objective, index) => {
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

    const deleteObjective = (objectiveIndex: number) => {
        const updatedObjectives = objectives!.filter(
            (_, index) => index !== objectiveIndex
        );
        setObjectives(updatedObjectives);
    };

    return {deleteObjective, deleteObjectivesKeyResult};

}

export {useDeleteObjective};