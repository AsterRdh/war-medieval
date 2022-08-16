import * as React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import '../../App.css'

export default class ManInArmListPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={"basePage-"+this.props.theme}>
                <div className={"queryArea"}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Search" variant="standard" />

                    </Box>
                </div>
                <div className={"tableArea"}>
                    123
                </div>
            </div>
        )
    }

}