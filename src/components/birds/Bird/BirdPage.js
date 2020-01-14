import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Banner from "../../presentation/Banner";
import generateSummary from "./helpers/generateSummary";
import getPicture from "./helpers/getPicture";

import "./BirdPage.css";

/**
  Presents a nicely formatted page for a given bird.
 */
const BirdPage = ({ bird }) => {
  const { profile } = bird;

  return (
    <div className="BirdPage">
      <Helmet title={`${bird.label} (Bird)`} />
      <section className="mb-5">
        <Banner size="small">
          <h1>{bird.label}</h1>
          <p className="lead">{generateSummary(bird)}</p>
        </Banner>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-9 mb-5">
            <img
              src={getPicture(bird, "large")}
              alt={bird.label}
              className="img-fluid img-thumbnail"
            />
            {profile && (
              <>
                {profile.picture_attribution && (
                  <figcaption className="text-right my-2">
                    <i className="fas fa-camera mr-2" />
                    {profile.picture_attribution}
                  </figcaption>
                )}
              </>
            )}
          </div>
          <div className="col-md-8 order-md-1 mb-5">
            <dl>
              <dt>Name</dt>
              <dd>{bird.name || <em>Unnamed</em>}</dd>
              <dt>Band Combo</dt>
              <dd>{bird.band_combo}</dd>
            </dl>
            {profile && (
              <>
                <p className="description">{profile.description}</p>
                {profile.sponsor_name && (
                  <dl className="sponsor">
                    <dt>Sponsor</dt>
                    <dd>
                      {profile.sponsor_website ? (
                        <a
                          href={profile.sponsor_website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.sponsor_name}
                        </a>
                      ) : (
                        profile.sponsor_name
                      )}
                    </dd>
                  </dl>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

BirdPage.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdPage;
