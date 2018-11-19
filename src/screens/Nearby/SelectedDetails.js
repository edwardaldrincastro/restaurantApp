import React, { Component } from 'react';
import SelectedTabNavigator from "../../navigators/selectedTab";

class SelectedRestaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <SelectedTabNavigator />
        );
    }
}

export default SelectedRestaurant;
