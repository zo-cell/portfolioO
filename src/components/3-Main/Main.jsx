// import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Main.css';

const myProjects = [
  {
    title: 'HTML&CSS project 1',
    category: 'css',
    imgPath: '/images/black.jfif',
  },
  { title: 'HTML&CSS project 2', category: 'css', imgPath: '/images/5.jpg' },
  { title: 'HTML&CSS project 3', category: 'css', imgPath: '/images/1.jpg' },
  { title: 'HTML&CSS project 4', category: 'css', imgPath: '/images/2.jpg' },
  { title: 'HTML&CSS project 5', category: 'css', imgPath: '/images/3.jpg' },

  { title: 'JavaScript Project 1', category: 'java', imgPath: '/images/4.jpg' },
  { title: 'JavaScript Project 2', category: 'java', imgPath: '/images/9.jpg' },
  {
    title: 'JavaScript Project 3',
    category: 'java',
    imgPath: '/images/black.jfif',
  },
  { title: 'JavaScript Project 4', category: 'java', imgPath: '/images/7.jpg' },

  { title: 'React Project 1', category: 'react', imgPath: '/images/6.jpg' },
  { title: 'React Project 2', category: 'react', imgPath: '/images/8.jpg' },
  {
    title: 'React Project 3',
    category: 'react',
    imgPath: '/images/black.jfif',
  },

  { title: 'Node Project 1', category: 'node', imgPath: '/images/9.jpg' },
  { title: 'Node Project 2', category: 'node', imgPath: '/images/black.jfif' },
];

const Main = () => {
  const [CurrentActive, setCurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

  const handleClick = (params) => {
    if (params === 'all') {
      const newArr = myProjects;
      setCurrentActive('all');
      setArr(newArr);
    } else {
      setCurrentActive(params);
      const newArr = myProjects.filter((item) => {
        return item.category === params;
      });
      setArr(newArr);
    }
  };

  return (
    <main>
      <section className="left-section flex">
        <button
          onClick={() => handleClick('all')}
          className={CurrentActive === 'all' ? 'active' : null}
        >
          all projects
        </button>
        <button
          onClick={() => handleClick('css')}
          className={CurrentActive === 'css' ? 'active' : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => handleClick('java')}
          className={CurrentActive === 'java' ? 'active' : null}
        >
          javaScript
        </button>

        <button
          onClick={() => handleClick('react')}
          className={CurrentActive === 'react' ? 'active' : null}
        >
          React & MUI
        </button>

        <button
          onClick={() => handleClick('node')}
          className={CurrentActive === 'node' ? 'active' : null}
        >
          Node & Express
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item, i) => {
            return (
              <motion.article
                key={i}
                className="flex"
                layout
                initial={{ transform: 'scale(0)',  opacity: 0 }}
                animate={{ transform: 'scale(1)',  opacity: 1 }}
                transition={{type: "spring", damping: 10 }}
              >
                <img src={item.imgPath} alt="image" />
                <div style={{ width: 225 }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                    sunt, officiis dolorem dignissimos facilis quibusdam alias.
                  </p>

                  <div className="icons flex">
                    <div className="flex" style={{ gap: '11px' }}>
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
