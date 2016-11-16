import React, {Component} from "react";
export default class Footer extends Component {
    constructor(props) {
        super(props);

    }
    filterState(stateName){
        this.props.filterState(stateName);

    }

    render() {
        return (
            <div className="well">
                <div className="row">
                    <a href="javascript:;" className="col-md-4 text-center" onClick={this.filterState.bind(this,"all")}>all</a>
                    <a href="javascript:;" className="col-md-4 text-center" onClick={this.filterState.bind(this,"completed")}>completed</a>
                    <a href="javascript:;" className="col-md-4 text-center" onClick={this.filterState.bind(this,"actived")}>actived</a>
                </div>
            </div>
        )
    }

}