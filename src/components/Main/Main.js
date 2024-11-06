import React from "react";
import "./Main.css";
import ClickContainer from "./Click_container";
import AboutCompanyContainer from "./aboutCompany_container";
import AdvantagesContainer from "./advantages_container";
import GalleryContainer from "./gallery_container";
import ServicesContainer from "./services_container";

function Main({
  advantagesRef,
  servicesRef,
  aboutCompanyRef,
  galleryRef,
  onOrderClick,
}) {
  return (
    <main className="main">
      <div className="about">
        <div>
          <ClickContainer onOrderClick={onOrderClick} />
        </div>
        <div ref={advantagesRef}>
          <AdvantagesContainer />
        </div>
        <div ref={servicesRef}>
          <ServicesContainer onOrderClick={onOrderClick} />
        </div>
        <div ref={aboutCompanyRef}>
          <AboutCompanyContainer />
        </div>
        <div ref={galleryRef}>
          <GalleryContainer />
        </div>
      </div>
    </main>
  );
}

export default Main;
