import React from 'react';
import { useEffect } from 'react';
import "./BlogList.scss";

const BlogList = (props) => {
    useEffect(() => {
        document.title = `${props.title}`;
      });

    return ( 
        <div className="bloglist-page">
            Blog List ey yo !!!
        </div>
     );
}
 
export default BlogList;