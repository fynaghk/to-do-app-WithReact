import React from 'react';
import Item from '../Item';

class List extends React.Component {


    render() { 
        const {todo}  = this.props;

        return ( <div>
                    <ul>
                        {todo.map((item, i)=>{
                               return <Item name={item.job} key={i}/>  
                            })
                        }
                    </ul>
                </div> );
    }
}
 
export default List;