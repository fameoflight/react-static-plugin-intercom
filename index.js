import React from 'react';

export default options => {
	if (!options.id) {
		console.log(`The Intercom plugin expects a intercom "id" option to be provided like ['react-static-intercom', {id: 'INTERCOM APP ID'}]`);
		return;
	}

	const intercomScript = `
		var APP_ID = "${options.id}";
		window.intercomSettings = {app_id: APP_ID};
		(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${pluginOptions.appId}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
	`;

	return {
		Head: () => (
			<React.Fragment>
 				<script dangerouslySetInnerHTML={{__html: intercomScript}}/>
			</React.Fragment>
		)
	};
};