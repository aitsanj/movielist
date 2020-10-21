import React, { Component } from 'react';
import './Movie.css';
class Movie extends Component{
    render(){
        return(
            <div className='movie'>
                <p><input className='movieInput' value={this.props.name} onChange={this.props.edit}/></p>
                <h3 style={{cursor:"pointer"}} onClick={this.props.remove}>X</h3>
            </div>
        )
    };
    shouldComponentUpdate(nextProps,nextState){
        return this.props.name !== nextProps.name ;
    }
    
};
export default Movie;