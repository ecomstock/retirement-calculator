import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const Assumptions = props =>
	<div>
		<h3>Assumptions of the model</h3>
		<TextField
			label="Life expectancy"
			defaultValue="90"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Average annual inflation"
			defaultValue="2.5"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Effective federal tax rate"
			defaultValue="14"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="State tax rate"
			defaultValue="9"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Percent of current income needed in retirement"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Average annual pre-retirement gains"
			defaultValue="9"
			margin="normal"
		/>
		<br />
		<TextField
			label="Average annual gains in retirement"
			defaultValue="6"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
	</div>

// Assumptions.propTypes = {

// }

export default Assumptions