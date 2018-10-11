import React, { Component } from 'react';

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="ui main text container">
        <ul>
          <li>Post a job and how much you're willing to pay</li>
          <li>Mark out an area, attach some photos.</li>
          <li>App will locate nearest depot</li>
          <li>App will list candidates</li>
          <li>Candidate accepts job</li>
          <li>Candidate does work</li>
          <li>Work is verified via 'consultant'</li>
          <li>Consultant takes image</li>
          <li>Image is uploaded and verified by owner</li>
          <li>Payment is made</li>
        </ul>
      </div>
    );
  }
}
