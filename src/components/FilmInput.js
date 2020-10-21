import React, { Component} from 'react';
import './FilmInput.css'
class FilmInput extends Component{
 
    render(){      
        return (
            <div>
                <input id="inputFilm" type='text' onChange={this.props.newFilm}/>
                <button disabled={this.props.able} onClick={this.props.addFilm}>Add</button>
            </div>
        )
    }
};
export default FilmInput;