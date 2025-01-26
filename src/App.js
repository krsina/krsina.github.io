import React from 'react';
import Tabs from './components/Tabs';
import './App.css';
function App() {
  return (
    <article className="bg-custom-color mt-8 gap-16 pb-16 max-w-2xl mx-auto items-center">
        <section className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-between">
          <img className="w-52 rounded-lg" src="profilepicture.png" alt="profile"></img>
          <div className="flex flex-col items-center md:items-start mr-2 mb-20">
            <h1 className="title text-5xl font-calistoga">hi krisna here 👋</h1>
            <p className="mt-4 font-inter font-medium">
              {/* Update my age */}
              {new Date().getFullYear() - 2002}
              -year-old software developer near Seattle ᴡᴀ
            </p>
            <p className="mt-2 font-inter w-4/5 text-center md:w-10/12 md:text-left">
              I like to develop full-stack, both irl and in apps. In my off time
              I'm either reading, playing games, or at the gym.   😊
            </p>
          </div>
        </section>

        <Tabs />
      </article>
  );
}

export default App;