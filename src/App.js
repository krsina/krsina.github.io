import React from 'react';
import Tabs from './components/Tabs';
function App() {
  return (
    <article className="mt-8 gap-16 pb-16 max-w-2xl mx-auto items-center">
        <section className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-between">
          <img className="w-52 rounded-lg" src="profilepicture.png" alt="profile"></img>
          <div className="flex flex-col items-center md:items-start mr-2 mb-20">
            <h1 className="title text-5xl">hi krisna here 👋</h1>
            <p className="mt-4 font-light">
              {/* Update my age */}
              {new Date().getFullYear() - 2001}
              -year-old software developer from Seattle ᴡᴀ
            </p>
            <p className="mt-2 font-light w-4/5 text-center md:w-10/12 md:text-left">
              I like to develop full-stack, both irl and in apps. In my off time
              I'm either reading, playing games, or at the gym.
            </p>
          </div>
        </section>

        <Tabs />
      </article>
  );
}

export default App;