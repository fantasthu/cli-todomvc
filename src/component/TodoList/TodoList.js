import React, {Component} from "react";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer"
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        let that = this;
        this.state = {
            data: this.props.data,
            checkedCount: that.checkCount.bind(that)(),
            allCount: this.props.data.length
        }
    }

    checkCount() {
        var count = 0;
        this.props.data.map((item)=> {
            if (item.isChecked) {
                count++
            }
            return item;
        })
        return count;
    }

    renderItems() {
        console.log("todolist,27",this.state.data);
        var lists = this.state.data.map((item)=> {
            return (<TodoItem data={item}
                              key={item.id}
                              delItem={this.delItem.bind(this, item.name)}
                              changeItemState={this.changeItemState.bind(this, item)}
            />)
        })
        return lists;
    }

    changeItemState(data, state) {
        var itemCounts = 0;
        var newData = this.state.data.map((item)=> {
            if (item.name === data.name) {
                item.isChecked = state;
            }
            return item;
        });
        this.state.data.map((item)=> {
            if (item.isChecked) {
                itemCounts++
            }
        });
        this.setState({
            data: newData,
            checkedCount: itemCounts
        })

    }

    delItem(name) {
        var newData = this.state.data.filter((item)=> {
            return item.name !== name;
        });
        this.setState({data: newData})
    }

    filterState(stateName) {
        var newData = null;
        switch (stateName) {
            case "all":
                newData=this.props.data;
                break;
            case "completed":
                newData = this.state.data.filter((item)=> {
                    return item.isChecked
                });
                break;
            case "actived":
                newData = this.state.data.filter((item)=> {
                    return item.isChecked==false
                });
                break;
        }
        console.log(newData);
        this.setState({data: newData})
    }

    render() {
        return (
            <div>
                {this.renderItems()}
                <div className="well">
                    完成个数:{this.state.checkedCount}<b/>
                    总个数:{this.state.allCount}
                </div>
                <Footer filterState={this.filterState.bind(this)}/>
            </div>)
    }

}