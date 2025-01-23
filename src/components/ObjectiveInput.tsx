import React from "react";

type ObjectiveInputProp = {
    setNewObjective: React.Dispatch<React.SetStateAction<string>>;
}

const ObjectiveInput = ({setNewObjective}: ObjectiveInputProp) => {
    return (
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
    );
}

export default ObjectiveInput;