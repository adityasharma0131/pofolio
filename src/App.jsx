import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Sample JSON data for documents
const documentLinks = {
  document1: {
    description: "Document 1",
    link: "https://drive.google.com/file/d/1TbNb2kN5LfwG_aSz86KdXluuGUYrVJ2y/view?usp=drive_link",
  },
  document2: {
    description: "Document 2",
    link: "https://drive.google.com/file/d/1s5kKEXL0i_Ff8BbGWzK9GGSA0lGRRB6R/view?usp=drive_link",
  },
  document3: {
    description: "Document 3",
    link: "https://drive.google.com/file/d/1oDZesMsP5lDvpoFU89bGo_CwpBc0a3aq/view?usp=drive_link",
  },
  document4: {
    description: "Document 4",
    link: "https://drive.google.com/file/d/1Qeni0_glH4jI8RLA-CovcuRBs3MNm3MN/view?usp=drive_link",
  },
  document5: {
    description: "Document 5",
    link: "https://drive.google.com/file/d/1EORbKrt8c7iUfrJI5hJfSJ7-L62Go0fC/view?usp=drive_link",
  },
  document6: {
    description: "Document 6",
    link: "https://drive.google.com/file/d/1ULfoeV8KO5_lh3SXXCAoq-eBSqifGAUn/view?usp=drive_link",
  },
  document7: {
    description: "Document 7",
    link: "https://drive.google.com/file/d/1v0NIlkljZSi-6Do3AfB6RfkfeCozbkf7/view?usp=drive_link",
  },
  document8: {
    description: "Document 8",
    link: "https://drive.google.com/file/d/1Sl8MQdReEhG2EolICbxbl8IaUHWFfv6i/view?usp=sharing",
  },
  document9: {
    description: "Document 9",
    link: "https://drive.google.com/file/d/14CiIg9WEKsITZEUQFxDrsmH1neWz-MnW/view?usp=drive_link",
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:documentName" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
