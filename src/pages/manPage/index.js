import * as React from "react";
import ManInArmCardPage from './cardPage'
import ManInArmListPage from './listPage'

class ManInArmPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            pageType:'list',
            selectID:'',
            datas:{},

        }
    }





    render() {
        switch (this.state.pageType) {
            case "card":
                return <ManInArmCardPage theme={this.props.theme}/>;
            default:
                return <ManInArmListPage theme={this.props.theme} />;
        }
    }
}
export default ManInArmPage