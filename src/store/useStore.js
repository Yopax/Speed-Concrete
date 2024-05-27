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
  /* 03. calculo resictencia del concreto con f´c */
  concretoConAire: undefined,
  setConcretoConAire: (value) => set({ concretoConAire: value }),
  calculateConcretoConAire: (fcsolve) => {
    const getConcretoConAire = (fcsolve) => {
      if (fcsolve === 150) return 0.8;
      if (fcsolve === 200) return 0.7;
      if (fcsolve === 210) return 0.68;
      if (fcsolve === 250) return 0.62;
      if (fcsolve === 280) return 0.57;
      if (fcsolve === 300) return 0.55;
      if (fcsolve === 350) return 0.48;
      if (fcsolve === 400) return 0.43;
      if (fcsolve === 450) return 0.38;

      // Condicionales para valores intermedios usando interpolación simple entre puntos cercanos
      if (fcsolve > 150 && fcsolve < 200)
        return 0.8 - ((fcsolve - 150) * (0.8 - 0.7)) / (200 - 150);
      if (fcsolve > 200 && fcsolve < 210)
        return 0.7 - ((fcsolve - 200) * (0.7 - 0.68)) / (210 - 200);
      if (fcsolve > 210 && fcsolve < 250)
        return 0.68 - ((fcsolve - 210) * (0.68 - 0.62)) / (250 - 210);
      if (fcsolve > 250 && fcsolve < 280)
        return 0.62 - ((fcsolve - 250) * (0.62 - 0.57)) / (280 - 250);
      if (fcsolve > 280 && fcsolve < 300)
        return 0.57 - ((fcsolve - 280) * (0.57 - 0.55)) / (300 - 280);
      if (fcsolve > 300 && fcsolve < 350)
        return 0.55 - ((fcsolve - 300) * (0.55 - 0.48)) / (350 - 300);
      if (fcsolve > 350 && fcsolve < 400)
        return 0.48 - ((fcsolve - 350) * (0.48 - 0.43)) / (400 - 350);
      if (fcsolve > 400 && fcsolve < 450)
        return 0.43 - ((fcsolve - 400) * (0.43 - 0.38)) / (450 - 400);

      return undefined; // Si el valor está fuera del rango de la tabla
    };

    const concretoConAire = getConcretoConAire(fcsolve);
    set({ concretoConAire });
  },
  /* 03. Densidad del cemento */
  densidadCemento: 0,
  setDensidadCemento: (value) => set({ densidadCemento: value }),



}));
 

export { useStore };
