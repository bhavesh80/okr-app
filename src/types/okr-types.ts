type ObjectiveType = {
    id: string;
    title: string;
    keyResults: KeyResultType[];
};

type KeyResultType = {
    title: string;
    initialValue: number;
    currentValue: number;
    targetValue: number;
    metrics: string;
};

type InsertObjectiveType = Omit<ObjectiveType, "id">

export type {ObjectiveType, KeyResultType, InsertObjectiveType};
