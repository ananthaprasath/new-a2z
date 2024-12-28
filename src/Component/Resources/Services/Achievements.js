import React from "react";
import CountUp from "react-countup";
import businessIcon from "../../image/icons/1.png"; // Replace with actual paths
import teamIcon from "../../image/icons/2.png";
import clientsIcon from "../../image/icons/3.png";
import promoUsersIcon from "../../image/icons/4.png";
import transUsersIcon from "../../image/icons/5.png";
import supportIcon from "../../image/icons/6.png";

const achievements = [
  {
    icon: businessIcon,
    value: 10,
    suffix: "+",
    label: "Year In Business",
    anime:"zoom-in-right",
  },
  {
    icon: teamIcon,
    value: 50,
    suffix: "+",
    label: "Team Members",
    anime:"zoom-in",

  },
  {
    icon: clientsIcon,
    value: 13999,
    suffix: "+",
    label: "Happy Clients",
    anime:"zoom-in-left",

  },
  {
    icon: promoUsersIcon,
    value: 6000,
    suffix: "+",
    label: "Promotional Users",
    anime:"zoom-in-right",

  },
  {
    icon: transUsersIcon,
    value: 7000,
    suffix: "+",
    label: "Transactional Users",
    anime:"zoom-in",

  },
  {
    icon: supportIcon,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    anime:"zoom-in-left",

  },
];

const Achievements = () => {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Achievements</h2>
        </div>
        <div className="row g-4  align-items-cente aos">
          {achievements.map((achievement, index) => (
            <div className=" col-md-4" data-aos={achievement.anime} key={index}>
              <div className="d-flex align-items-center p-3 bg-light">
                {/* Icon */}
                <img
                  src={achievement.icon}
                  alt={achievement.label}
                  style={{ width: "50px", height: "50px" }}
                  className="me-3"
                />
                {/* Text */}
                <div>
                  <h3 className="fw-bold text-primary mb-0">
                    <CountUp
                      start={0}
                      end={achievement.value}
                      duration={5.5}
                      suffix={achievement.suffix}
                    />
                  </h3>
                  <p className="text-muted mb-0" style={{ fontSize: "1.1rem" }}>
                    {achievement.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
