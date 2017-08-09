import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main/Main.jsx';
import Skilltest from './components/skilltest/Skilltest.jsx';

export default (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route exact path="/skilltest" component={Skilltest} />
	</Switch>
);
