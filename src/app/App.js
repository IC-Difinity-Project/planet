import React, {useState} from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MainLayout from "../components/MainLayout";
import RoadMapPage from "../pages/RoadMapPage";
import GalleryPage from "../pages/GalleryPage";
import './App.scss';
import {useWindowWidth} from "../utils/hooks";
import MainLayoutMobile from "../components/MainLayoutMobile";

function App() {

    // const [mouse, setMouse] = useState({x: 25698.78954, y: 987456321.58987})
  const width = useWindowWidth();

  return (
    <div
        className="app"
        // onMouseMove={(event) =>
        //     setMouse({x: event.clientX, y: event.clientY})}
    >
      { width > 750 ? (
          <MainLayout /*mouse={mouse}*/ />
      ) : (
          <MainLayoutMobile />
      )}
      <Routes >
        <Route
          path="/"
          element={<HomePage />}
          exact
        />
        <Route
            path="/road-map"
            element={<RoadMapPage width={width} />}
            exact
        />
        <Route
            path="/gallery"
            element={<GalleryPage width={width} />}
            exact
        />
        {/*<Redirect to="/" />*/}
      </Routes>
    </div>
  );
}

export default App;
