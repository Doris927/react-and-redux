import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {actions as blogListActions} from '../blogList/'
import {setPage} from './actions'

import { withStyles } from '@material-ui/core/styles';
import {Fab, Toolbar} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import red from "@material-ui/core/colors/red";


const styles = theme => ({
    leftButton: {
        marginRight:theme.spacing.unit *3
    },
    rightButton:{
        marginLeft:theme.spacing.unit * 3
    },
    pageButtons:{
        marginLeft:theme.spacing.unit * 0
    },
    toolbarMy:{
        paddingLeft:0
    }
});

const defaultPage = 1;


class PageSelector extends React.Component {
    constructor() {
        super(...arguments);

        this.setUp = this.setUp.bind(this);
        this.setNext = this.setNext.bind(this);
    }


    componentDidMount() {
        //const defaultPage = 'page1';
        this.props.onSelectPage(defaultPage);
    }

    setUp(){
        console.log(this.props.current);
        const lastPage = this.props.current-1;
        this.props.onSelectPage(lastPage);
    }

    setNext(){
        const nextPage = this.props.current+1;
        this.props.onSelectPage(nextPage);
    }



    render() {
        const {current,amountPage, pageSize} = this.props;
        const {classes} = this.props;
        return (
            <Toolbar className={classes.toolbarMy}>
                <div>
                    {
                        <Fab key="prev" color="primary" label="上一页"
                             disabled={current <= 1} className={classes.leftButton}
                             onClick={this.setUp} size='small'>
                            <Icon>keyboard_arrow_left</Icon>
                        </Fab>
                    }
                    {
                        `Page ${current} of ${amountPage}`
                    }
                    {
                        <Fab key="next" color="primary"  label="下一页"
                             disabled={current === amountPage}  className={classes.rightButton}
                             onClick={this.setNext} size='small'>
                            <Icon>keyboard_arrow_right</Icon>
                        </Fab>
                    }
                </div>
                {/*<button onClick={this.setUp}>Last</button>*/}
                {/*<button onClick={this.setNext}>Next</button>*/}
                {/*<div>{this.props.current}/{this.props.amountPage}, pageSize:{this.props.pageSize}</div>*/}
            </Toolbar>

        );
    }
}

PageSelector.propTypes = {
    onSelectPage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    console.log(state);
    const {current,amount,pageSize} = state.pageInfo;
    return{
        current: current,
        amountPage:Math.ceil(amount/pageSize),
        pageSize: pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        onSelectPage: (page) => {
            dispatch(setPage(page));
            dispatch(blogListActions.fetchBlog(page));
        }
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PageSelector));