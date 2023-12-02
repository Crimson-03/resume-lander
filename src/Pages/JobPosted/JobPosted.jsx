import React from "react";
import { useNavigate } from "react-router-dom";

const JobPosted = ({ job }) => {
  const navigate = useNavigate();
  const handleApplyClick = () => {
    navigate("/trackapplications");
  };

  const { name, jobType, skills } = job;

  return (
    <div className="card mb-3">
      <div className="card-body d-sm-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{name}</h5>
          <hr />
          <div className="card-text">
            <dl className="row">
              <dt className="col-sm-3">Job Type</dt>
              <dd className="col-sm-9">{jobType}</dd>

              <dt className="col-sm-3">Skills</dt>
              <dd className="col-sm-9">
                <p>{skills}</p>
              </dd>
            </dl>
          </div>
        </div>
        <button
          type="button"
          onClick={handleApplyClick}
          className="btn btn-primary"
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default JobPosted;
