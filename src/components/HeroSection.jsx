import React from "react";


import FrontPageHeroDiv from "./FrontPageHeroDiv";
import StepByStepJourney from "./StepByStepJourney";
import Deliverables from "./Deliverables";
import WhyChooseLegafin from "./WhyChooseLegafin";
import ITandFinanceConsultancy from "./ITandFinanceConsultany";



const HeroSection = () => {
  return (
    <>
   
      <div>

       
        {/* Hero Section */}
        <FrontPageHeroDiv />

        {/* Step by step process */}
        <StepByStepJourney />

        {/* Private limited registration Block */}
        < Deliverables />

        {/* Why Choose Section */}
        <WhyChooseLegafin />

        {/* ITandFinanceConsultancy - 4th div of hero section */}
        <ITandFinanceConsultancy />
        
        
      </div>
       
    </>
  );
};

export default HeroSection;
