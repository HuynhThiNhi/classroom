import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/home/Navbar";
import Dashboard from "./components/home/Dashboard";


const App = () => {

  const [createdClasses, setCreatedClasses] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const getClasses = async () => {
      const classesFromServer = await fetchClasses();
      console.log(classesFromServer);
      setCreatedClasses(classesFromServer);
    };

    getClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const res = await fetch("https://classroom-api-1712636.herokuapp.com/classes");
      const data = await res.json();
        console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar setCreatedClasses = {setCreatedClasses}/>
          <Dashboard createdClasses = {createdClasses}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
