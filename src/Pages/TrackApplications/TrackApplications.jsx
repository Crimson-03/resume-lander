import React from "react";
import JobPosted from "../JobPosted/JobPosted";

const TrackApplications = ({ data }) => {
  const { companyName, shortDesc, jobs } = data;
  console.log(data);
  console.log({ companyName });

  return (
    <div className="container py-2">
      <div className="row">
        <h1>{companyName}</h1>
        <p>{shortDesc}</p>
      </div>
      <hr />
      <div className="row">
        <h2>Job Openings</h2>
        {jobs.map((job) => (
          <JobPosted job={job} key={job.name} />
        ))}
      </div>
    </div>
  );
};

export default TrackApplications;
