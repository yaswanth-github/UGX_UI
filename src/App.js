// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="UGX_App">
      <header className="App-header">
        <img src="ugx_ui_img.png" className="App-logo" alt="logo" />
        <h1>Power Analytics</h1>
        <input type="text" placeholder="Search..." className="Search-bar" />
      </header>

      <nav className="App-nav">
        <ul>
          <li>Dashboard</li>
          <li>Layouts</li>
          <li>Mailbox</li>
          <li>Calendar</li>
          <li>UI Demands</li>
          <li>Forms</li>
          <li>Pages</li>
          <li>Tables</li>
          <li>Charts</li>
          <li>Maps</li>
          <li>Profile</li>
        </ul>
      </nav>

      <main className="App-main">
        <section className="Dashboard">
          <div className="Block1">
            <div className="Sub-block1">
              <h2>Fans</h2>
              <p>27</p>
              <h2>Power Consumption</h2>
              <p>270</p>
            </div>
            <div className="Sub-block2">
              <h2>Light</h2>
              <p>65</p>
              <h2>Power Consumption</h2>
              <p>876</p>
            </div>
            <div className="Sub-block3"></div>
            <div className="Sub-block3">
              <h2>Refrigerator</h2>
              <p>4</p>
              <h2>Power Consumption</h2>
              <p>0</p>
            </div>
            <div className="Sub-block4">
              <h2>Air Condition</h2>
              <p>852</p>
              <h2>Power Consumption</h2>
              <p>65</p>
            </div>
          </div>

          <div className="Block2">
            <h2>Average Power Consumption (KW/H)</h2>
            {/* Insert graph component here */}
          </div>

          <div className="Block3">
            <h2>Power Consumption</h2>
            {/* Insert power consumption usage component here */}
          </div>
          
          <div className="Block4">
            <h2>Current Power Consumption (KW/H)</h2>
            {/* Insert current power consumption bar graph component here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
