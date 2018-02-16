import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

const Tooltip = props =>
        <i data-tip={props.content} class="material-icons left-margin">help_outline <ReactTooltip /></i>
        

Tooltip.propTypes = {
    content: PropTypes.string.isRequired
}

export default Tooltip