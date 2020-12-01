import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    users: [],
    selected: "me",
  };
  componentDidMount = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile", {
      method: "GET",
      headers: new Headers({
        Authorization: process.env.REACT_APP_TOKEN,
        ContentType: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((info) => {
        console.log(info);

        this.setState({ users: info }, console.log(this.state.users));
        console.log(this.state.users);
      });
  };
  render() {
    return (
      <>
        <div className="ad-div">
          <img
            className="ad"
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt="Advertise on LinkedIn"
            border={0}
          />
        </div>
        <div className="usersDiv">
          {this.state.users &&
            this.state.users.slice(0, 6).map((user, index) => (
              <div className="userdiv2" key={`SuggestUsers${index}`}>
                <Row>
                  <img className="user" src={user.image} alt="user"></img>
                  <div>
                    <h5
                      as={Link}
                      to={`/user/${user._id}`}
                      id={`SuggestUsers${index}name`}
                    >
                      {user.name}
                    </h5>
                    <p className="usersh1">{user.title}</p>
                  </div>
                </Row>
              </div>
            ))}
        </div>
        <div className="ad-div">
          <img
            className="ad"
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt="Advertise on LinkedIn"
            border={0}
          />
        </div>
      </>
    );
  }
}

export default Sidebar;
