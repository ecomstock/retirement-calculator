import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

const Tooltip = props =>
    <div className="tooltip-wrapper" data-tip data-for={props.tipId}>
        <i class="material-icons left-margin">help_outline</i>
        <ReactTooltip id={props.tipId} className="tooltip">
            <span>{props.content}</span>
        </ReactTooltip>    
    </div>
        

Tooltip.propTypes = {
    content: PropTypes.string.isRequired,
    tipId: PropTypes.string.isRequired,
}

export default Tooltip