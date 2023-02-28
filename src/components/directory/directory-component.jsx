import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory-style.scss';
import Menuitem from "../menuitems/menuitem-component";
import { selectDirectorySections } from "../../Redux/directory/directory.selectors";


const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <Menuitem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);


// class Directory extends React.Component{
//     constructor(props){
//         super(props);
        
//         this.state = {
//             sections: [
//               {
//                 title: 'hats',
//                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                 id: 1,
//                 linkUrl: 'hats'
//               },
//               {
//                 title: 'jackets',
//                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                 id: 2,
//                 linkUrl: ''
//               },
//               {
//                 title: 'sneakers',
//                 imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                 id: 3,
//                 linkUrl: ''
//               },
//               {
//                 title: 'womens',
//                 imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                 size: 'large',
//                 id: 4,
//                 linkUrl: ''
//               },
//               {
//                 title: 'mens',
//                 imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                 size: 'large',
//                 id: 5,
//                 linkUrl: ''
//               }
//             ]
//           };
//         //   console.log(this.state);
       
//     }
//     render(){
//         return <div className='directory-menu'>
//                 {/* {this.state.sections.map(section=>(
//                     <Menuitem key={section.id} title={section.title} imageUrl={section.imageUrl}  linkUrl={section.linkUrl} size={section.size}/>
//                 ))} */}
//                  {this.state.sections.map(({id,...otherSectionProps})=>(
//                     <Menuitem key={id} {...otherSectionProps} />
//                 ))}
//         </div>
//     }
// }

// export default Directory

