import "./Header.css";

import Middleinfo from "./Middleinfo";

const Header = () => {
    return (
        <div className="app__bar">
            
            <div className="middleinfo__container">
                <Middleinfo />
            </div>
            
        </div>
    );
};
export default Header;