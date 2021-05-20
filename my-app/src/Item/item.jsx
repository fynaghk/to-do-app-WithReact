import React from 'react';

class Item extends React.Component {
    render() { 
        return ( <div>
                    <li>{this.props.name}</li>
                 </div> );
    }
}
 
export default Item;