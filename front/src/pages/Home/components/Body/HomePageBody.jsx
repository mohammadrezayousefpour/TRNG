import React from "react";
import classes from "./HomePageBody.module.css";
const HomePageBody = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>True Random Number Generator</span>
      <div className={classes.body}>
        <div>
          At random-number.org, we offer random numbers generated by a true
          random number generator (TRNG), also called hardware random number
          generator (HRNG). In contrast to TRNGs, computers produce
          pseudo-random numbers, which seems random to many applications, but
          they are not truly random. For many applications, including
          cryptography, simulation of complex physical systems, etc., the
          pseudo-random numbers are not sufficiently random, which have led many
          researchers to investigate the possibility of creating TRNGs.
        </div>
        <div>
          To generate truly random numbers, every TRNG needs a physical source
          of randomness (also called entropy source). In this regard, the
          RandN's randomness comes from optical devices. Then, by applying
          proper post-processing algorithms, the observed physical randomness
          transformed into a sequence of truly random bits that can be queried
          by users. Also, we would like to emphasize that we do not keep the
          sequence of random bits delivered to users.
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;