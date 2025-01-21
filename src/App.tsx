import {useState} from "react";
import {ObjectiveType} from "./types/okr-types.ts";
import CreateOKRForm from "./components/CreateOkrForm.tsx";
import DisplayOkrs from "./components/DisplayOkrs.tsx";

const initialObjectives = [
    {
        title: "Build a software team",
        keyResults: [
            {
                title: "Get 5 Frontend engineers",
                initialValue: 0,
                currentValue: 2,
                targetValue: 5,
                metrics: "engineers",
            },
            {
                title: "Get 5 Backend engineers",
                initialValue: 0,
                currentValue: 1,
                targetValue: 5,
                metrics: "engineers",
            },
        ],
    },
];

function App() {
    const [objectives, setObjectives] =
        useState<ObjectiveType[]>(initialObjectives);

    return (
        <div className="mx-24 mt-8 space-y-8">
            <CreateOKRForm
                setObjectives={setObjectives}
                objectives={objectives}
            />
            <DisplayOkrs
                objectives={objectives}
                setObjectives={setObjectives}
            />
        </div>
    );
}

export default App;
