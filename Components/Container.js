import Headlanding from "./header";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";


const Container = React.memo((props) => {
  return (
    <div>
      <Headlanding/>
      <div className="container-section d-flex">
        <Sidebar />
        {props.children}
      </div>
      <Footer/>
    </div>
  );
});
Container.displayName = 'Container';


export default Container;
