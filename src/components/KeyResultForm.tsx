import {KeyResultType} from "../types/okr-types.ts";

type KeyResultFormProps = {
    index: number;
    keyResult: KeyResultType;
    keyResults: KeyResultType[];
    setKeyResults: React.Dispatch<React.SetStateAction<KeyResultType[]>>;
}
const KeyResultForm = ({
                           index,
                           keyResult,
                           keyResults,
                           setKeyResults
                       }: KeyResultFormProps) => {
    const updateKeyResult = (
        index: number,
        field: string,
        value: string | number
    ) => {
        const updatedKeyResults = keyResults.map((kr, i) => {
            if (i === index) {
                return {...kr, [field]: value};
            }
            return kr;
        });
        setKeyResults(updatedKeyResults);
    };

    const deleteKeyResult = (index: number) => {
        setKeyResults(keyResults.filter((_, i) => index !== i));
    };

    return (
        <div className="border border-1 p-4 bg-gray-50" key={index}>
            <div className="space-y-4">
                <input
                    className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                    type="text"
                    id="title"
                    placeholder="Key Results Title"
                    value={keyResult.title}
                    onChange={(e) =>
                        updateKeyResult(index, "title", e.target.value)
                    }
                    required
                />
                <div className="flex space-x-4 w-fit">
                    <input
                        className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                        type="number"
                        id="initialValue"
                        placeholder="Inital Value"
                        required
                        onChange={(e) =>
                            updateKeyResult(index, "initialValue", e.target.value)
                        }
                    />{" "}
                    <input
                        className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                        type="number"
                        id="currentValue"
                        placeholder="Current Value"
                        required
                        onChange={(e) =>
                            updateKeyResult(index, "currentValue", e.target.value)
                        }
                    />{" "}
                    <input
                        className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                        type="number"
                        id="targetValue"
                        placeholder="Target Value"
                        required
                        onChange={(e) =>
                            updateKeyResult(index, "targetValue", e.target.value)
                        }
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <input
                            className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                            type="string"
                            id="metrics"
                            placeholder="Metrics"
                            required
                            onChange={(e) =>
                                updateKeyResult(index, "metrics", e.target.value)
                            }
                        />
                    </div>
                    <button
                        className="mt-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => deleteKeyResult(index)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default KeyResultForm;