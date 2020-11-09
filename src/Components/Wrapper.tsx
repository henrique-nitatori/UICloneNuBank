import React from 'react';

 import  '../Styles/Components/Wrapper.css';

 interface IWrapper {
     backgroundColor: string,
     className: string
 }

const Components: React.FC<IWrapper> = ({children, backgroundColor, className}) => {
    const styles = {
        backgroundColor: backgroundColor || '#FFF'
    }

  return( 
    <div id="wrapper" className={`${className}`} style={styles}> 
        {children}
    </div>
  );
}

export default Components;