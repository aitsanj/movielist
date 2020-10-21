import React, { Component, Fragment } from 'react';
import Movie from '../components/Movie';
import FilmInput from '../components/FilmInput';
import './MovieList.css'

class MovieList extends Component{
    state={
        listOfMovie:[],
        filmNamesArr:[],
        id:0,
        btnAble:true
    };    
    index=1;

    newId=()=>{
        this.setState({id:this.index++})
    }
    newFilm = event=>{
        this.setState({filmNamesArr:event.target.value});
        this.setState({btnAble:false});
    };
    addNewFilm=()=>{
        const inputValue = document.getElementById('inputFilm')
            this.setState(prevState=>({
              listOfMovie: [...prevState.listOfMovie,{name:this.state.filmNamesArr,id:this.state.id}]
            }));
            this.newId();
            this.setState({filmNamesArr:[]});
            inputValue.value='';
            this.setState({btnAble:true});
    };
   
    editFilm =(event,id)=>{
        const index = this.state.listOfMovie.findIndex(f=> f.id===id);
        const film = [...this.state.listOfMovie];
        film[index].name = event.target.value;
        this.setState({listOfMovie:film});
    };

    removeFilm = (id)=>{
        const index = this.state.listOfMovie.findIndex(f=> f.id===id);
        const film = [...this.state.listOfMovie];
        film.splice(index,1);
        this.setState({listOfMovie:film});
    }

    render(){
        return(
            <Fragment>
                <section>
                    <FilmInput
                        newFilm={e=> this.newFilm(e)}
                        addFilm={this.addNewFilm}
                        able = {this.state.btnAble}
                    />
                    <h3>To watch list:</h3>
                    <div className='movieList'>
                    {this.state.listOfMovie.map(film=>(
                        <Movie
                            name = {film.name}
                            key= {film.id}  
                            edit={e=> this.editFilm(e,film.id)} 
                            remove={()=>this.removeFilm(film.id)}                         
                         />
                    ))}
                    </div>
                </section>
            
            </Fragment>
        )
    };
    componentDidUpdate(){

    }
};

export default MovieList;