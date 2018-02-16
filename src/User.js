import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
import Input, { InputLabel } from 'material-ui/Input';
import { FormGroup, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Tooltip from "./Tooltip"

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
		<Tooltip content="test" />
		<br />
		<FormControl className="monthly-income">
			<InputLabel className="left-margin monthly-income">Monthly income after taxes</InputLabel>
			<Input
				className="left-margin"
				margin="normal"	
			/>
			<FormHelperText id="fh-left-margin">Do not include spouse's income</FormHelperText>
		</FormControl>
		<Tooltip />
		<br />
		<p className="left-margin">Are you eligible to receive Social Security or a pension? 
			<Tooltip />
			<FormGroup row>
				<FormControlLabel
					control={
						<Checkbox value="checkedA" />
					}
				label="Social Security"
				/>
				<FormControlLabel
					control={
						<Checkbox value="checkedA" />
					}
				label="Pension"
				/>
			</FormGroup>
		</p>

		<h3 className="left-margin">Your accounts</h3>
		<p className="left-margin">401(k)/403(b)</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<br />
		<p className="left-margin">IRA</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<br />
		<p className="left-margin">Roth IRA</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<br />
		<p className="left-margin">Private accounts (stocks, bonds, mutual funds, ETFs, etc.)</p>
		<FormControl>
			<InputLabel className="left-margin">Account balance</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<FormControl>
			<InputLabel className="left-margin">Annual contribution</InputLabel>
			<Input
				className="left-margin"
				margin="normal"
			/>
		</FormControl>
		<Tooltip />
		<br />
	</div>

// User.propTypes = {

// }

export default User