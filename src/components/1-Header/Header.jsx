// import React from 'react';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [Theme, setTheme] = useState(localStorage.getItem('LStheme') ?? "dark");

  useEffect(() => {
    if (Theme === "light"){
      document.body.classList.remove('dark');
      
      document.body.classList.add('light');
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  } , [Theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-th-menu flex"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {' '}
      </button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={() => {
        localStorage.setItem("LStheme", Theme === "light"  ? "dark" : "light");
        setTheme(localStorage.getItem("LStheme"));
      }}
       className='modeBtn flex'>
        <span className={Theme === 'light' ? 'icon-sun' : 'icon-moon-o'}></span>
      </button>

      {/* modal */}
      {ShowModal ? (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="fixed1">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
