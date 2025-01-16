declare global {
    interface Window {
      hj: any; 
      _hjSettings: {
        hjid: number;
        hjsv: number;
      };// Le decimos a TypeScript que 'hj' es cualquier tipo
    }
  }
  
  export {};