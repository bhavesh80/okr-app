import {ObjectiveType} from "../types/okr-types.ts";

let dbIndex = 1;
const db = new Map<number, ObjectiveType>();

const initialObjectives = [
    {
        id: dbIndex++,
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

initialObjectives.forEach((objective) => db.set(
    objective.id, objective
));


function getOkrsFromDb(): Promise<ObjectiveType[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.from(db.values()));
        }, 3000);
    });
}

function insertOkrToDb(newOkr: ObjectiveType): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            db.set(dbIndex++, newOkr);
            resolve();
        }, 3000);
    })
}

export {getOkrsFromDb, insertOkrToDb};