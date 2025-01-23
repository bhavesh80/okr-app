import {ObjectiveType} from "../types/okr-types.ts";
import {v4 as uuidv4} from 'uuid';

const db = new Map<string, ObjectiveType>();

const initialObjectives = [
    {
        id: uuidv4(),
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
            console.log(Array.from(db.values()));
            resolve(Array.from(db.values()));
        }, 3000);
    });
}

function insertOkrToDb(newOkr: Omit<ObjectiveType, "id">): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = uuidv4();
            db.set(id, {
                id: id,
                ...newOkr
            });
            resolve();
        }, 3000);
    })
}

// function updateOkrToDB() {
// TODO: get the id of objective we want to update for
// fetch objective with selected id
// replace the old okr with new okr
// update the map
// }
export {getOkrsFromDb, insertOkrToDb};