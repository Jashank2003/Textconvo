import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setalert] = useState(null);

  const toggleaction = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark mode is Enabled", "Success:) ");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is Enabled", "Success:) ");
    }
  };

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          sitename="Textutilsoo"
          mode={mode}
          toggleaction={toggleaction}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route
              exact path="/"
              element={ */}
                <Textform
                  showalert={showalert}
                  titleofarea="Write the text here"
                  mode={mode}
                />
              {/* }
            ></Route> */}

            {/* <Route exact path="/about" element={<About mode={mode} />}></Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
