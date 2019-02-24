import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from "./actionTypes";

export const fetchBlogStarted = () =>({
    type: FETCH_STARTED
});

export const fetchBlogSuccess  = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchBlogFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchBlog = (page) => {
    return (dispatch) => {
        //const apiUrl = `/data/page${page}.json`;
        const apiUrl = `blogs?page=${page}&limit=5`;

        dispatch(fetchBlogStarted())

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                //console.log("responseJson:"+responseJson);
                dispatch(fetchBlogSuccess(responseJson));
            }).catch((error) => {
                dispatch(fetchBlogFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchBlogFailure(error));
        })
    };
}