import React, { Component } from 'react';

import {view as PageSelector} from './pageSelector/';
import {view as BlogList} from './blogList/';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <BlogList />
                        <PageSelector />
                    </Grid>
                    <Grid item xs={3}/>
                </Grid>
            </div>

        );
    }
}

export default App;