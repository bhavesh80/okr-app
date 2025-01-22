import {useEffect, useState} from "react";
import {ObjectiveType} from "./types/okr-types.ts";
import CreateOKRForm from "./components/CreateOkrForm.tsx";
import DisplayOkrs from "./components/DisplayOkrs.tsx";
import {getOkrsFromDb} from "./db/okr-store.ts";

function App() {
    const [objectives, setObjectives] =
        useState<ObjectiveType[] | null>(null);
    const isLoading = objectives === null;

    useEffect(() => {
        (async () => {
            const responseInitialOkrs: ObjectiveType[] = await getOkrsFromDb();
            setObjectives(responseInitialOkrs);
        })()
    }, []);

    return (
        <div className="mx-24 mt-8 space-y-8">
            <CreateOKRForm
                setObjectives={setObjectives}
                objectives={objectives ?? []}
            />
            {isLoading ? (<p>loading...</p>) :
                <DisplayOkrs
                    objectives={objectives}
                    setObjectives={setObjectives}
                />}
        </div>
    );
}

export default App;
