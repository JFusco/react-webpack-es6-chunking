'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom';
import routes from './routes';

const app = document.getElementById('application');

render((
	<Router history={browserHistory} routes={routes}/>
), app);
