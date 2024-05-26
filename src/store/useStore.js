import { create } from "zustand";

const useStore = create((set) => ({
  /* 01. calculo del volumen de agua */
  resultado: 0,
  setResultado: (value) => set({ resultado: value }),

  /* 02. calculo resictencia del concreto con f´c */
  concreteStrength: 0,
  setConcreteStrength: (strength) => set({ concreteStrength: strength }),
  fcsolve: "",
  setFcsolve: (value) => set({ fcsolve: value }),

}));
 

export { useStore };
