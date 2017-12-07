import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const Holdings = props =>
	<div>
		<p>Your current retirement savings</p>
		<p>SS dropdowns go here...</p>
    <p>What types of accounts do you have?</p>
		<Button raised>401k/403b</Button>
		<Button raised>IRA</Button>
		<Button raised>Roth IRA</Button>
		<Button raised>Defined Benefit Pension</Button>
		<Button raised>Defined Contribution Pension</Button>
		<Button raised>Private Stocks/Mutual Funds/ETFs</Button>
		<Button raised>Bonds</Button>
		<Button raised>Cash</Button>
		<p>What types of accounts does your spouse have?</p>
		<Button raised>401k/403b</Button>
		<Button raised>IRA</Button>
		<Button raised>Roth IRA</Button>
		<Button raised>Defined Benefit Pension</Button>
		<Button raised>Defined Contribution Pension</Button>
		<Button raised>Private Stocks/Mutual Funds/ETFs</Button>
		<Button raised>Bonds</Button>
		<Button raised>Cash</Button>
	</div>

// Holdings.propTypes = {

// }

export default Holdings