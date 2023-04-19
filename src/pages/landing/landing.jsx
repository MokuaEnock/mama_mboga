import "./landing.css";
import React, { useState, useEffect } from "react";
import image from "../../assets/image1.jpg";

export default function Landing() {
  return (
    <main id="landing-page">
      <section id="landing-page-1">
        <div id="landing-page-1-1"></div>
        <div id="landing-page-1-2"></div>
      </section>

      <section id="landing-page-2">
        <div id="landing-page-2-head">
          <h2>Browse all categories</h2>
          <p>Find what you want and what you need.</p>
        </div>

        <div id="landing-page-2-body">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="landing-page-2-foot">
          <span></span>
          <span></span>
        </div>
      </section>

      <section id="landing-page-3">
        <div></div>
        <div>
          <span id="landing-p3-head"></span>
          <span id="landing-p3-body">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </section>

      <section id="landing-page-4">
        <span></span>
        <span></span>
      </section>

      <section id="landing-page-5">
        <div id="landing-p5-cont1">
          <span id="landing-p5-c1-head">
            <p>New Arrivals</p>
            <p>Trending Products</p>
            <p>Best Selling</p>
          </span>

          <span className="landing-p5-c1"></span>
          <span className="landing-p5-c1"></span>
          <span className="landing-p5-c1"></span>
        </div>

        <div></div>
      </section>

      <div id="landing-page-6">
        <div></div>
      </div>
      <section id="landing-page-7"></section>
      <section id="landing-page-8"></section>
      <section id="landing-page-9"></section>
    </main>
  );
}
