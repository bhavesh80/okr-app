import { createContext, ReactElement, useState } from "react";
import { ObjectiveType } from "../types/okr-types.ts";

type OkrContextType = {
  objectives: ObjectiveType[] | null;
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[] | null>>;
};

export const OkrContext = createContext<OkrContextType>({
  objectives: null,
  setObjectives: () => {},
});

const OkrProvider = ({ children }: { children: ReactElement }) => {
  const [objectives, setObjectives] = useState<ObjectiveType[] | null>(null);

  const stateToExpose = { objectives, setObjectives };

  return (
    <OkrContext.Provider value={stateToExpose}>{children}</OkrContext.Provider>
  );
};
export default OkrProvider;
