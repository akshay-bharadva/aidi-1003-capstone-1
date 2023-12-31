import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import styles from "./style";
import {
  ButtonScrollTop,
  Hero,
  Navbar,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  // CTA,
  Footer,
  ContactForm,
  CTA,
} from "./components/";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

const App = () => {
  const slideRightVariants = {
    hidden: {
      x: "-80%",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    viewport: { once: true },
  };

  const slideLeftVariants = {
    hidden: {
      x: "30vw",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    viewport: { once: true },
  };

  const scaleUpVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    viewport: { once: true },
  };

  return (
    <div className="w-full overflow-hidden bg-primary">
      <ButtonScrollTop />
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            slideLeftVariants={slideLeftVariants}
            slideRightVariants={slideRightVariants}
          />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing scaleUpVariants={scaleUpVariants} />
          <CardDeal scaleUpVariants={scaleUpVariants} />
          <Testimonials />
          <Clients />
          <CTA scaleUpVariants={scaleUpVariants} />
          <ContactForm scaleUpVariants={scaleUpVariants} />
          <Footer />
        </div>
      </div>
          <div className="fixed bottom-20 right-10 z-50">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
    </div>
  );
};

export default App;
