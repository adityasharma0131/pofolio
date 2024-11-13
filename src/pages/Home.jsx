import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";

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

const Home = () => {
  // Extract the document name from the URL
  const { documentName } = useParams();

  // Check if the document exists in the data
  const document = documentLinks[documentName];

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Zodiac HR Logo" />
      </div>
      <h1>Zodiac HR & Training</h1>
      <p className="description">360 Degree HR Services Organization.</p>

      <div className="link-container">
        {/* Static Links */}
        <a
          href="https://zodiachrc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Website: https://zodiachrc.com
        </a>
        <a
          href="https://www.linkedin.com/company/zodiac-hr-consultants-i-pvt-ltd./"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          ZODIAC HR CONSULTANTS INDIA PVT. LTD. | LinkedIn
        </a>

        {/* Conditional rendering of document link */}
        {document ? (
          <a
            href={document.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Mobile No. | Email Id | Google Map
          </a>
        ) : (
          <p>Document not found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
