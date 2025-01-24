import { InsertObjectiveType, ObjectiveType } from "../types/okr-types.ts";

const HTTP_STATUS = {
  not_found: 404
}

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
  const response = await fetch(
    `http://localhost:3000/objectives/${objectiveId}`,
    {
      method: "DELETE",
    }
  );
  if (response.status === HTTP_STATUS.not_found) {
    throw new Error("Objective not found");
  }
}

export { getOKRs, insertOKR, deleteOKR };
