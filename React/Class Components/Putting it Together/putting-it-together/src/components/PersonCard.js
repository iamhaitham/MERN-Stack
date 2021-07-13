import React,{Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            age:this.props.age
        }
    }

    handleIncrement=()=>{
        this.setState({age:this.state.age+1});
    }

    render(){
        var {firstName,lastName,age,hairColor}=this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={()=>this.handleIncrement()}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;