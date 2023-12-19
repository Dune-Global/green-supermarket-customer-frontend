import React, { use, useEffect, useState } from "react";

export default function Countdown() {
  const [endTime, setEndTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/28/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEndTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const style = {
    box: "flex flex-col items-center bg-gray-0  rounded-md px-3 md:px-6 py-2 md:py-4",
    text1: "text-2xl md:text-4xl text-green-400",
    text2: "text-sm md:text-md text-green-600",
    colon: "px-2 md:px-4 text-xl md:text-3xl text-gray-400 flex items-center",
  };

  return (
    <div>

      {endTime ? (
        <>
          <h1>Best Sale Ended!</h1>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <div className={`${style.box}`}>
                <div className={`${style.text1}`}>{days}</div>
                <div className={`${style.text2}`}>DAYS</div>
            </div>
            <div className={`${style.colon}`}>
                <span>:</span>
            </div>
            <div className={`${style.box}`}>
            <div className={`${style.text1}`}>{hours}</div>
                <div className={`${style.text2}`}>HOURS</div>
            </div>
            <div className={`${style.colon}`}>
                <span>:</span>
            </div>
            <div className={`${style.box}`}>
            <div className={`${style.text1}`}>{minutes}</div>
                <div className={`${style.text2}`}>MINS</div>
            </div>
            <div className={`${style.colon}`}>
                <span>:</span>
            </div>
            <div className={`${style.box}`}>
            <div className={`${style.text1}`}>{seconds}</div>
                <div className={`${style.text2}`}>SECS</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
