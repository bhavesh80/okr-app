import {useContext, useEffect} from "react";
import {ObjectiveType} from "./types/okr-types.ts";
import CreateOKRForm from "./components/CreateOkrForm.tsx";
import DisplayOkrs from "./components/DisplayOkrs.tsx";
import {getOkrsFromDb} from "./db/okr-store.ts";
import {OkrContext} from "./providers/OkrProvider.tsx";

function App() {
    const {objectives, setObjectives} = useContext(OkrContext);
    const isLoading = objectives === null;

    useEffect(() => {
        (async () => {
            const responseInitialOkrs: ObjectiveType[] = await getOkrsFromDb();
            console.log({responseInitialOkrs});
            setObjectives(responseInitialOkrs);
        })()
    }, [setObjectives]);

    return (
        <div className="mx-24 mt-8 space-y-8">
            <CreateOKRForm
                setObjectives={setObjectives}
                objectives={objectives ?? []}
            />
            {isLoading ? (<p>loading...</p>) :
                <DisplayOkrs
                    objectives={objectives ?? []}
                    setObjectives={setObjectives}
                />}
        </div>
    );
}

export default App;
