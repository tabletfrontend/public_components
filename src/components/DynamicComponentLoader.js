import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Tablet from '@tabletfrontend/component-library';

const DynamicComponentLoader = () => {
  const { componentName } = useParams();
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const component = Tablet[componentName];
    setDynamicComponent(() => component); // Set as a function that returns the component
  }, [componentName]);
  
  if (!DynamicComponent) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return <DynamicComponent />
};

export default DynamicComponentLoader;