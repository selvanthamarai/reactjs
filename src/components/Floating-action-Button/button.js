import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



export default function floatButton(props) {


    const navToPermission = () => {
        console.log(",,,,,,,,,,,,", props);
        props.prop.history.push('/dashboard',{type:'Leave Application'});
    };
    return (
        <Fab onClick={navToPermission} variant="extended" color="primary" aria-label="Add" className="button" style={{marginLeft:'90%',marginTop:'-4%'}}>
       <AddIcon />
        Apply
      </Fab>
    )
}