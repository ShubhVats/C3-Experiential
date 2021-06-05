import "./App.css";

import Navbar from "./Screens/Navbar";
import Body from "./Screens/Body";
import Slide from "./Screens/Slide";
import Users from "./Helpers/users";
import Footer from "./Screens/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      {Users.map((e) => {
        return (
          <Slide key={e.count} count={e.count} name={e.name} line={e.line} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
