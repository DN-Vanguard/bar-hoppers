import logo from '../../logo-bh.png';
import "../../App.css";

export default function Letter() {
    return (
        <div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Explore By Letter
                </p>
            </div>
        </div>
    );
}