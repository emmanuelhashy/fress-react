import React from "react";

const About = ({name, about, following, followers, joined, location, handle, photo }) => {
  return (
    <section className="about">
      <div className="about__left">
        <div className="about__top">
          <div className="about__image">
            <img
              className="cook-photo"
              src={`/images/${photo}`}
              alt="about "
            />
          </div>
          <div className="about__text">
            <div className="about__text-top">
              <h1 className="text-lg">Welcome to {name}'s italian kitchen</h1>
              <p className="text-sm">
                {about}
                <a href="/"> Read more</a>
              </p>
            </div>
            <div className="about__text-bottom">
              <p>Following {following}k</p>
              <p>Followers {followers}k</p>
              <p>{joined}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <input type="text" placeholder="&#xf4ad; send a message" />
        </div>
      </div>
      <div className="about__right">
        <button className="btn-red">Follow {handle}</button>
        <button className="btn-outiline-red">share kitchen</button>
      </div>
    </section>
  );
};

export default About;
