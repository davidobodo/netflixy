import React from 'react'
import FontAwesomeIcon from './FontAwesomeIcons'
import {helpMsg} from '../constants/toasts'

const HelpMenu = ({showToast}) =>{
    return (<FontAwesomeIcon 
        icon="bars" 
        text="help" 
        onClick={showToast.bind(null, "success", helpMsg)} />);
}

export default HelpMenu