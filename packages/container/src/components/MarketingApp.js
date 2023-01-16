import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({pathname: nextPathname})=> {        
        //This is syncing history with Marketing App 
        const {pathname} = history.location;
        // navigate only if path is different
        if(pathname !== nextPathname)
          history.push(nextPathname);
      },
    });
    // listen to child route change event
    history.listen(onParentNavigate);
  },[]);

  return <div ref={ref} />;
};
