import user from "../Data/User.json";
import Documents from "./Content/Documents";
import Projects from "./Content/Projects";
import Footer from "./Footer";

function Content() {
    return (
        <div id='content'>
            {/*<h2>Hi there👋!</h2>*/}
            {/*<hr className="horizontal"/>*/}
            <Documents/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Content;