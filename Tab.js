
class TabControler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_index: 0
        }
    }
    // 定义一个方法，传递形参“当前点击的下标”，触发方法改变当前的类名
    // 这是点击按钮的样式，分为当前样式btn_active_style和一般的样式btn_common_style
    btn_click = (index) => {
        // 这里使用三目运算符的方式判断当前下标，是就把当前样式赋给他
        return index === this.state.current_index ? "btn_active_style" : "btn_common_style"
    }
    // 定义一个方法，传递形参“当前点击的下标”，触发方法改变当前内容的类名
    // 这是点击改变的内容的样式，分为当前样式content_active_style和一般的样式content_common_style
    content_change = (index) => {
        return index === this.state.current_index ? "content_active_style" : "content_common_style"
    }

    componentWillReceiveProps(){
        // 这里可以更新数据
    }
    render(){
        // 这里遍历子元素，获取点击的当前class名，
        let btn_box = React.Children.map(this.props.children,(node,index) => {
            // console.log(2)
            return(
                // 这里使用匿名函数，不用再生命周期和点击函数中再更新数据
                // 点击事件，改变当前下标，同时classname执行函数方法返回当前类名
                <li onClick = { ()=>{ this.setState({ current_index: index }) } }  className={ this.btn_click(index) }>
                    {node.props.name}
                </li>
            )
        })
        // 这里遍历子元素，获取下标，改变内容
        let content_box = React.Children.map(this.props.children,(node,index) => {
            return(
                <div onClick = { ()=>{ this.setState({ current_index: index }) } }  className={ this.content_change(index) } >
                    { node }
                </div>
            )
        })

        return (
            <div className="tab_text">
                {/* 点击按钮 */}
                <ul>
                    {btn_box}
                </ul>
                {/* 改变的内容 */}
                <div className="change_box">
                    {content_box}
                </div>
            </div>
        )     
    }
}

export class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <TabControler>
                    {/* 内容1 */}
                    <div name="综合">
                        1
                    </div>
                    {/* 内容2 */}
                    <div name="价格最低">
                        2
                    </div>
                    {/* 内容3 */}
                    <div name="销量">
                        3
                    </div>
                </TabControler>
            </div>
        )
    }
}