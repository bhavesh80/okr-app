import {ObjectiveType} from "../types/okr-types.ts";

async function getOkrsFromDb(): Promise<ObjectiveType[]> {
    const responseDefaultOkrs = await fetch("http://localhost:3000/objectives");
    return await responseDefaultOkrs.json();
}

async function insertOkrToDb(newOkr: Omit<ObjectiveType, "id">): Promise<void> {
    const response = await fetch("http://localhost:3000/objectives", {
        method: 'POST',
        body: JSON.stringify(newOkr),
    });
    const responseData = await response.json();
    console.log(responseData);
}

export {getOkrsFromDb, insertOkrToDb};