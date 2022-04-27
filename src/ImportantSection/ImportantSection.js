import React from 'react';
import SpeechMenu1 from '../assets/GamePlay/SpeechMenu1.jpg';
import SpeechMenu2 from '../assets/GamePlay/SpeechMenu2.jpg';
import SpeechMenu3 from '../assets/GamePlay/SpeechMenu3.jpg';

const ImportantSection = () => {
  return (
    <div className="bg-base-100 text-center py-6 px-0 md:px-2">
      <div className="container mx-auto py-4 px-2">
        <div className="grid h-auto card bg-accent-content rounded-box place-items-center text-accent p-0 md:p-3 py-8 leading-relaxed shadow-xl">
          <h1 className="text-3xl md:text-5xl font-bold py-7 px-2 md:px-4">
            How does this Work?
          </h1>
          <div className="">
            <div className="py-5 px-5">
              <h2 className="text-1xl md:text-2xl py-3 px-5 text-center">
                We at Memory Lane have created a virtual experience that brings
                a new way to memorize those important things. Anything from
                important speeches that need to be memorized-to poems and songs.
                The possibilities are up to you.
              </h2>
            </div>
            <div className="container md:flex md:flex-row flex-col justify-around p-5">
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img src={SpeechMenu3} alt="Speech Selection" />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Speech Menu</h2>
                  <p>User is prompted with menu to intreact with Memory Lane</p>
                </div>
              </div>
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img
                    src={SpeechMenu2}
                    alt="Speech Dropdown Showing a list of speeches that include: I have a Dream, Macbeth, and The Declaration of Independence"
                  />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Speech Dropdown</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card w-96 bg-accent shadow-xl">
                <figure>
                  <img
                    src={SpeechMenu1}
                    alt="Speech has been selected and user is pressing begin to go in game"
                  />
                </figure>
                <div className="card-body text-white text-xl">
                  <h2 className="card-title">Begin Speech Visualization</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantSection;
