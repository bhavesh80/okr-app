import { useState } from "react";
import { KeyResultType } from "../types/okr-types.ts";

type AddKeyResultModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddKeyResult: (keyResult: KeyResultType) => void;
};

const AddKeyResultModal = ({
  isOpen,
  onClose,
  onAddKeyResult,
}: AddKeyResultModalProps) => {
  const [keyResult, setKeyResult] = useState<KeyResultType>({
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metrics: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddKeyResult(keyResult);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Add Key Result</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
              type="text"
              placeholder="Key Results Title"
              value={keyResult.title}
              onChange={(e) =>
                setKeyResult({ ...keyResult, title: e.target.value })
              }
              required
            />
            <div className="flex space-x-4">
              <input
                className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                type="number"
                placeholder="Initial Value"
                value={keyResult.initialValue}
                onChange={(e) =>
                  setKeyResult({ ...keyResult, initialValue: +e.target.value })
                }
                required
              />
              <input
                className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                type="number"
                placeholder="Current Value"
                value={keyResult.currentValue}
                onChange={(e) =>
                  setKeyResult({ ...keyResult, currentValue: +e.target.value })
                }
                required
              />
              <input
                className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
                type="number"
                placeholder="Target Value"
                value={keyResult.targetValue}
                onChange={(e) =>
                  setKeyResult({ ...keyResult, targetValue: +e.target.value })
                }
                required
              />
            </div>
            <input
              className="w-full shadow-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:ring-1 border border-gray-500 rounded-md"
              type="text"
              placeholder="Metrics"
              value={keyResult.metrics}
              onChange={(e) =>
                setKeyResult({ ...keyResult, metrics: e.target.value })
              }
              required
            />
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Key Result
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default AddKeyResultModal;
