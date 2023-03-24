import Header from "./modules/Header";
import Separator from "./shared/Separator";
import MainSection from "./modules/MainSection";
import Menu from "./widgets/Menu";
import Description from "./widgets/Sections/Description";
import Usage from "./widgets/Sections/Usage";

function App() {

    return <div>
        <Header/>
        <Separator/>
        <MainSection>
            <Description/>
            <Separator/>
            <Usage/>
        </MainSection>
        <Menu/>
    </div>
}

export default App
