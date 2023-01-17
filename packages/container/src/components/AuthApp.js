import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

export default ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath:history.location.pathname,
      onNavigate: ({pathname: nextPathname})=> {        
        //This is syncing history with Marketing App 
        const {pathname} = history.location;
        // navigate only if path is different
        if(pathname !== nextPathname)
          history.push(nextPathname);
      },      
      onSignIn    
    });
    // listen to child route change event
    history.listen(onParentNavigate);
  },[]);

  return <div ref={ref} />;
};
