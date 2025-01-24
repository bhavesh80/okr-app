import { InsertObjectiveType, ObjectiveType } from "../types/okr-types.ts";

async function getOKRs(): Promise<ObjectiveType[]> {
  const responseDefaultOkrs = await fetch("http://localhost:3000/objectives");
  console.log({ responseDefaultOkrs });

  return await responseDefaultOkrs.json();
}

async function insertOKR(newOkr: InsertObjectiveType): Promise<void> {
  const response = await fetch("http://localhost:3000/objectives", {
    method: "POST",
    body: JSON.stringify(newOkr),
  });
  const responseData = await response.json();
  console.log(responseData);
}

async function deleteOKR(objectiveId: string): Promise<void> {
  await fetch(`http://localhost:3000/objectives/${objectiveId}`, {
    method: "DELETE",
  });
}

export { getOKRs, insertOKR, deleteOKR };
