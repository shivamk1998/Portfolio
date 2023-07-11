import React from "react";
import "./portfolio.css";
import recentworks from "./Data";

const Portfolio = () => {
  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>
      {/* <div className="work_filters">
        <span className="work_item"></span>

      </div> */}

      <div className="work_container grid">
        {recentworks.map((work, id) => {
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={work.image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <h3 className="work_title">{work.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
