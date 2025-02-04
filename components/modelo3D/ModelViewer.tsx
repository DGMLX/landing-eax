'use client'

import React from 'react';
import '@google/model-viewer';


 

declare global {
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
}

// Definir las propiedades del componente
interface ModelViewerProps {
    src: string;
    alt: string;
    autoRotate?: boolean;
    cameraControls?: boolean;
    style?: React.CSSProperties;
  }
  
  // Componente ModelViewer
  const ModelViewer: React.FC<ModelViewerProps> = ({
    src,
    alt,
    autoRotate = true,
    cameraControls = true,
    style = { width: '100%', height: '400px' },
  }) => {
    return (
      // @ts-ignore
      <model-viewer
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        style={style}
        // @ts-ignore
      ></model-viewer>
    );
  };
  
  export default ModelViewer;