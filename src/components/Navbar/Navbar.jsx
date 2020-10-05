import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Justin Ye</h1>
        <div className="info-bar">
          <p className="info-item">justinye@college.harvard.edu</p>
        </div>
        <div className="info-bar">
            <Link className="info-link"
            to={{ pathname: "https://instagram.com" }}
            target = "_blank">
                Instagram
            </Link>

            <Link className="info-link"
                to={{ pathname: "https://spotify.com" }}
                target="_blank">
                      Spotify
            </Link>

            <Link className="info-link"
                to={{ pathname: "https://linkedin.com" }}
                target="_blank">
                LinkedIn
            </Link>

        </div>
      </div>
          <div className="nav-background">
              <Link className = "nav-link"
                  to={{ pathname: '/about' }}>
                  About
              </Link>
              <Link className="nav-link"
                  to={{ pathname: '/experience' }}>
                  Experience
              </Link>
              <Link className="nav-link"
                  to={{ pathname: '/projects' }}>
                  Projects
              </Link>

          </div>
    </>
  );
}
