import {ObjectiveType} from "../types/okr-types.ts";

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


function getOkrsFromDb(): Promise<ObjectiveType[]> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(initialObjectives);
        }, 3000);
    });
}

export {getOkrsFromDb};