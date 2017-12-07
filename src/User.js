import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const User = props =>
	<div>
  	<p>Tell us about yourself</p>
		<p>Are you legally married?</p>
		<br />
		<TextField
			label="How old are you?"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="How old is your spouse?"
			margin="normal"
		/>
		<br />
		<p>Gender dropdowns go here.</p>
		<br />
		<TextField
			label="Average monthly income"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Spouse's average monthly income"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Other monthly income"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="Significant annual income"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<p>Education dropdowns go here.</p>
		<br />
		<p>Homeowner dropdown goes here.</p>
		<br />
		<TextField
			label="When will your primary home be paid off?"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
		<br />
		<TextField
			label="What is your monthly mortgage payment?"
			margin="normal"
		/>
		<i class="material-icons">help_outline</i>
	</div>

// User.propTypes = {

// }

export default User