import "./App.css";
import { sectionList } from "./sections.jsx";

function App() {
    return ( 
    
    <main > 
        {
            sectionList.map((section, index) => {
                return section(index);
            })
        } 
        </main>
    );
}
export default App;