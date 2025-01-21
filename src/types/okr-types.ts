type ObjectiveType = {
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

export type {ObjectiveType, KeyResultType};