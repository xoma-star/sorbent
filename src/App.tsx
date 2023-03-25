import Header from "./modules/Header";
import Welcome from "./widgets/Sections/Welcome";
import Usage from "./widgets/Sections/Usage";
import AlsoUsage from "./widgets/Sections/AlsoUsage";
import Advantages from "./widgets/Sections/Advantages";
import Demonstration from "./widgets/Sections/Demonstration";
import Characteristics from "./widgets/Sections/Characteristics";
import Contacts from "./widgets/Sections/Contacts";

function App() {

    return <div>
        <Header/>
        <Welcome/>
        <Usage/>
        <AlsoUsage/>
        <Advantages/>
        <Demonstration/>
        <Characteristics/>
        <Contacts/>
    </div>
}

export default App
