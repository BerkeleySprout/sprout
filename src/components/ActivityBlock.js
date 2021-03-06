import React, { Component } from "react";
import ReactStars from "react-stars";
import EntryForm from "./EntryForm";
import Modal from "react-responsive-modal";

class ActivityBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.handleShowClick = this.handleShowClick.bind(this);
  }

  onOpenModal = () => {
    this.setState({ showForm: true });
  };

  onCloseModal = () => {
    this.setState({ showForm: false });
  };

  handleShowClick(e) {
    e.preventDefault();

    var current = this.state.showForm;

    this.setState({
      showForm: !current
    });
  }

  render() {
    var credit = this.props.user ? (
      <h6> Created by: {this.props.activity.username} </h6>
    ) : null;

    return (
      <div className="card-container">
        <div className="activity-card" id="hover-raised">
          <img
            class="card-img-top"
            src={this.props.activity.img}
            alt="https://i.imgur.com/613WTRK.jpg"
            onClick={this.onOpenModal}
          />

          <div className="activity-card-body" onClick={this.onOpenModal}>
            <h5 className="card-title"> {this.props.activity.title} </h5>
            <div className="card-text">
              <h6> {this.props.activity.description} </h6>
              {credit}
            </div>
          </div>

          <div className="activity-card-footer">
            <div className="card-rating">
              <ReactStars
                count={5}
                value={Math.ceil(this.props.activity.rating / 20)}
                size={20}
                color2={"#ffd700"}
              />
            </div>

            {/*
            <a
              id="explore-button"
              className="btn btn-sprout-light"
              style={{ width: "100%" }}
              href={this.props.activity.link}
            >
              Explore
              <i class="fa fa-search" style={{ marginLeft: "5px" }} />
            </a>
            
            <button
              type="button"
              className="btn btn-sprout-dark"
              href="#article"
              style={{ width: "100%" }}
              onClick={this.onOpenModal}
            >
              Complete
            </button>

            */}
          </div>
        </div>

        <Modal open={this.state.showForm} onClose={this.onCloseModal} little>
          <EntryForm
            friends={this.props.friends}
            activity={this.props.activity}
          />
        </Modal>
      </div>
    );
  }
}

export default ActivityBlock;
