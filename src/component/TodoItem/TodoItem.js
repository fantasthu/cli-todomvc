import React,{Component} from "react";
import "./TodoItem.css";
export default class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    del(){
        this.props.delItem();
    }
    isChecked(e){
        console.log(this.refs.cbox.checked);
        if(this.refs.cbox.checked){
            this.refs.del_line.style.display="block"
        }else{
            this.refs.del_line.style.display="none"
        }
        this.props.changeItemState(this.refs.cbox.checked);
    }
    render() {
        console.log("todoitem,23",this.state.data);
        return (
            <div className="list-group">
                <li className="list-group-item" >{this.state.data.name}
                    <input type="checkbox" ref="cbox" className="pull-left" checked={this.state.data.isChecked} onChange={this.isChecked.bind(this)} />
                    <span className="pull-right" onClick={this.del.bind(this)}>删除</span>
                    <div className="line" ref="del_line" style={{display:this.state.data.isChecked?"block":"none"}}></div>
                </li>
            </div>);
    }
}