import React, {Component} from 'react';

import {Fab, Toolbar} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import red from "@material-ui/core/colors/red";
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    button:{
        marginLeft: theme.spacing.unit * 1,
        marginRight:theme.spacing.unit * 1
    },
    rightButton:{
        marginLeft:theme.spacing.unit * 1
    },
    card: {
        marginBottom:theme.spacing.unit *3
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    icon:{
        marginRight:theme.spacing.unit
    },
    avatar: {
        backgroundColor: red[500],
    },
    blogList:{
        margin:0,
        padding:0,
    }
});

class BlogItem extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        const {title, createdAt, content} = this.props;
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardHeader
                        title={title}
                        subheader={createdAt}
                    />

                    <CardContent>


                        <Typography component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        Continue
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>

        );
    };
}

export default withStyles(styles)(BlogItem);