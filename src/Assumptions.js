import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const Assumptions = props =>
	<div>
		<h2>Here are the editable assumptions of this model.</h2>
		<TextField
			label="Life expectancy"
			defaultValue="90"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Spouse's life expectancy"
			defaultValue="92"
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
			label="Percent of current income needed in retirement"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Age at first 401k/IRA/Roth distribution"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Age at first social security distribution"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Age at first pension distribution"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Lifetime earning years"
			defaultValue="80"
			margin="normal"
		/>
		<br />
		<TextField
			label="Spouse's lifetime earning years"
			defaultValue="80"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<i class="material-icons">help_outline</i>
		<br />
		<h3>Average Annual Returns by Age and Account Type</h3>
		<br />
		<p>Table goes here...</p>
	</div>

// Assumptions.propTypes = {

// }

export default Assumptions