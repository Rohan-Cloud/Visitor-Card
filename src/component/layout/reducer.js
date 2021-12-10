const Reducer = (state, action) => {
    switch (action.type) {
        case 'IMAGE_BANNER':
            return {
                ...state,
                image_banner_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'ROTATING_IMAGE_BANNER':
            return {
                ...state,
                rotating_image_banner_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'COLLECTION_SLIDER':
            return {
                ...state,
                collection_slider_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'PRODUCT_SLIDER':

            return {
                ...state,
                product_slider_context: {
                    posts: action.payload,
                    name: action.name,
                    type: action.type
                }
            };
        case 'PRODUCT_SLIDER_FORM':

            return {
                ...state,
                product_slider_form_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'PRODUCT_GRID':

            return {
                ...state,
                product_grid_context: {
                    posts: action.payload,
                    name: action.name,
                    type: action.type
                }
            };
        case 'PRODUCT_GRID_FORM':

            return {
                ...state,
                product_grid_form_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'ANNOUNCEMENT_BAR':

            return {
                ...state,
                announcement_bar_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'NAVIGATION_LIST_HOME':

            return {
                ...state,
                navigation_list_home_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'NAVIGATION_LIST_HOME_LOGO':

            return {
                ...state,
                navigation_list_home_logo_context: {
                    posts: action.payload,
                    type: action.type
                }
            };
        case 'LOAD':

            return {
                ...state,
                load: {
                    isLoad: action.payload,
                    type: action.type
                }
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;