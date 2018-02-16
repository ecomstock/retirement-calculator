import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const User = props =>
	<div>
  	<h3 className="left-margin">Tell us about yourself</h3>
		<FormControl>
			<InputLabel className="left-margin">Age</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
		<FormControl>
			<InputLabel className="left-margin">Your total monthly income after taxes</InputLabel>
			<Input
				className="left-margin"
				margin="normal"	
			/>
			<FormHelperText id="fh-left-margin">Do not include spouse's income</FormHelperText>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
		<p className="left-margin">Will you be eligible for Social Security benefits?</p>
		<p className="left-margin">Do you have a defined benefit pension?</p>
		<h3 className="left-margin">Your accounts</h3>
		<p className="left-margin">401(k)/403(b)</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
		<p className="left-margin">IRA</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
		<p className="left-margin">Roth IRA</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
		<p className="left-margin">Private accounts (stocks, bonds, mutual funds, ETFs, etc.)</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<i class="material-icons">help_outline</i>
		<br />
	</div>

// User.propTypes = {

// }

export default User