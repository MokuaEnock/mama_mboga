import "./landing.css";
import React, { useState, useEffect } from "react";

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

      <section id="landing-page-3"></section>
      <section id="landing-page-4"></section>
      <section id="landing-page-5"></section>
      <section id="landing-page-6"></section>
    </main>
  );
}
