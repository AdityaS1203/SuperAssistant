import React from 'react';

const Home = () => {
	const divstyle={
		marginLeft:80,width:700,position:'absolute'
	};
	const mystyle={
		marginLeft: 900,height:300,width:600,display:'block'
	};
	const st={
		borderRadius:5,fontSize:20,backgroundColor: '#7F00FF',height:60,width:180,color:'white',marginLeft:0
	};
			return (
				<div style={{marginTop:200}}>
					<div
				style={divstyle}
				><h1 style={{fontSize:50}}>Transform Google Forms Into Interactive Workflows</h1>
					<span style={{fontSize:20}}>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms.
						With BoloForms, you can create interactive workflows, approval flows & automate processes.
					</span>
					<br /><br /><br />
					<button style={st}type="submit" name="button">Install For Free</button>
					</div>
						<div>
							<button style={mystyle} type="submit" name="button">Video</button>
				    </div>
				</div>


			);
}

export default Home;
