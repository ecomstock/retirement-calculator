import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const User = props =>
	<div>
  	<h3 className="left-margin">Tell us about yourself</h3>
		<TextField
			className="left-margin"
			label="Age"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Average total monthly income after taxes. Do not include spouse's income."
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<p>Will you be eligible for Social Security benefits?</p>
		<p>Do you have a defined benefit pension?</p>
		<h3>Your accounts</h3>
		<p>401(k)/403(b)</p>
		<TextField
			label="Account balance"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<TextField
			label="Annual contribution"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<p>IRA</p>
		<TextField
			label="Account balance"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<TextField
			label="Annual contribution"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<p>Roth IRA</p>
		<TextField
			label="Account balance"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<TextField
			label="Annual contribution"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<p>Private accounts (stocks, bonds, mutual funds, ETFs, etc.)</p>
		<TextField
			label="Account balance"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<TextField
			label="Annual contribution"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
	</div>

// User.propTypes = {

// }

export default User