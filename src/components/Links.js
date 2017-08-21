import React from 'react'

const Links = ({ setFilter }) => (
	<div className="row">
		<div className="col-md-4 col-sm-4" onClick = {() => setFilter('SHOW_ALL')}>
			<span style={{cursor:'pointer'}}>Show All</span>
		</div>
		<div className="col-md-4 col-sm-4" onClick = {() => setFilter('SHOW_COMPLETED')}>
			<span style={{cursor:'pointer'}}>Show Completed</span>
		</div>
		<div className="col-md-4 col-sm-4" onClick = {() => setFilter('SHOW_UNFINISHED')}>
			<span style={{cursor:'pointer'}}>Show Unfinished</span>
		</div>				
	</div>	
)

export default Links;