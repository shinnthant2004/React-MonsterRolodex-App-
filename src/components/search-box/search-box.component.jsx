import { Component } from "react";
class SearchBox extends Component{
    render(){
        const {onChangeHandler}=this.props;
        return (
            <input
            type="search"
            className={this.props.className}
            placeholder={this.props.placeholder}
            onChange={onChangeHandler}
          />
        )
    }
}
export default SearchBox;