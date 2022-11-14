import React from "react";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      MyName: "Galyna Mseddi",
      bio: "Date of birth:22.09.1983",
      Profession: "WebDevelopper",
      url: "/smiling.jpg",
      timer: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.MyName}</h1>
        <h2>{this.state.bio}</h2>
        <h2>{this.state.Profession}</h2>
        <img src={this.state.url} />
        <p>{this.state.timer}</p>
      </div>
    );
  }
}
export default Profile;
