import { createContext, useState } from "react";
import useInterval from "./useInterval";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(2022);
  const [money, setMoney] = useState(1000000);
  const [earth, setEarth] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [realeState, setRealeState] = useState(0);

  useInterval(() => {
    if (timerActive) setTimer((prevState) => prevState + 1);
  }, 5000);

  const reset = () => {
    setTimerActive(false);
    setTimer(0);
  };

  return (
    <statsContext.Provider
      value={{
        timer,
        setTimer,
        timerActive,
        setTimerActive,
        money,
        setMoney,
        impacctEcolo,
        setImpactEcolo,
        reset,
        earth,
        setEarth,
      }}
    >
      {children}
    </statsContext.Provider>
  );
}
