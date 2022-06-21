import React from "react";
import classes from "./FAQsBody.module.css";
const FAQsBody = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Frequently Asked Questions</span>
      <div className={classes.body}>
        <div>
          <span className={classes.itemTitle}>
            Why is there a quota on the number of random bytes requested by a
            user for each day?
          </span>
          <span className={classes.answer}>
            We have a limited amount of resources, so to balance out the
            generated random bits among different users, we have to put a quota
            on each user's request.
          </span>
        </div>
        <div>
          <span className={classes.itemTitle}>
            What can RandN offer if I need a large number of truly generated
            random numbers?
          </span>
          <span className={classes.answer}>
            In this case, you can contact us, so we manage a plan to address
            your requirements. Moreover, we also provide TRNG hardware and
            system solutions customized for your need. As such, you have the
            freedom to control the whole process of random bit generation,
            securely and privately.
          </span>
        </div>
        <div>
          <span className={classes.itemTitle}>
            WHow long do you keep the random data delivered to a user?
          </span>
          <span className={classes.answer}>
            We completely remove the random data from our database as soon as we
            transfer it to the user.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQsBody;
