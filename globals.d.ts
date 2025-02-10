declare global {
    interface Window {
      hj: any; 
      _hjSettings: {
        hjid: number;
        hjsv: number;
      };// Le decimos a TypeScript que 'hj' es cualquier tipo
    }



    namespace JSX {
        interface IntrinsicElements {
          'model-viewer': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
              src: string;
              alt: string;
              'auto-rotate'?: boolean;
              'camera-controls'?: boolean;
              style?: React.CSSProperties;
            },
            HTMLElement
          >;
        }
      }

      
      interface Window {
          hbspt: {
            forms: {
              create: (options: {
                portalId: string;
                formId: string;
                target:string;
              }) => void;
            };
          };
        }
      
  }
  



export {};