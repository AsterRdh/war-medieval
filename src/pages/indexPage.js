import {NavPane, NavPaneItem, Text} from "react-desktop/windows";
import React from 'react';
import {person} from '../img/icon/SVGIcons'
import ManInArmPage from "./manPage";
import './IndexPageStyle.css'


class IndexPage extends React.Component{
    constructor(props) {
        super(props);
        this.props={
            theme:'dark'
        }
        this.state={
            selected:"123"
        }
    }

    renderIcon=(name)=> {
        const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
        return (
            <div>
                {person(fill)}
            </div>
        );
    }
    onMenuSelect=()=>{

    }

    render() {
        return(
            <div className="Index-Main">
                <NavPane openLength={200} push color={'#48c4ea'} theme={this.props.theme} className="Index-Mid">
                    <NavPaneItem
                        title={"兵牌"}
                        icon={this.renderIcon("1")}
                        theme={this.props.theme}
                        background="#4a515a"
                        selected={this.state.selected=='123'}
                        onSelect={() => this.setState({ selected: '123' })}
                        padding="10px 20px"
                        push
                    >
                        <ManInArmPage theme={this.props.theme}/>
                    </NavPaneItem>
                    <NavPaneItem
                        title={"1232"}
                        icon={this.renderIcon("1")}
                        theme={this.props.theme}
                        background="#4a515a"
                        selected={this.state.selected=='1232'}
                        onSelect={() => this.setState({ selected: '1232' })}
                        padding="10px 20px"
                        push
                    >

                    </NavPaneItem>
                </NavPane>
            </div>
        )
    }
}
export default IndexPage;