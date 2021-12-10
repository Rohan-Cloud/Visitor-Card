import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from "react-router-dom";
import GloabalScreen from '../views/globalSettingScreen';
import HomeScreen from '../views/homeScreen';
import AnnouncementBar from '../views/homeScreen/announcementBar';
import CollectionSlider from '../views/homeScreen/collectionSlider';
import ImageBanner from '../views/homeScreen/imageBanner';
import ProductGrid from '../views/homeScreen/productGrid';
import ProductSlider from '../views/homeScreen/productSlider';
import RotatingImageSlider from '../views/homeScreen/rotatingImageSlider';
import * as constants from "../views/constantParameter.js";
import { Settings } from '../views/Publish/settings';
import Navigation from '../views/homeScreen/navigation';
export const HomeScreenRoute = () => {

    return (
        <Router history={Router}>
            <Switch>
                <Route exact path={constants.BASE_URL+"/builder"} component={HomeScreen} />
                <Route exact path={constants.BASE_URL+"/builder/imagebanner"} component={ImageBanner} />
                <Route exact path={constants.BASE_URL+"/builder/rotatingimage"} component={RotatingImageSlider} />
                <Route exact path={constants.BASE_URL+"/builder/collectionslider"} component={CollectionSlider} />
                <Route exact path={constants.BASE_URL+"/builder/productgrid"} component={ProductGrid} />
                <Route exact path={constants.BASE_URL+"/builder/productslider"} component={ProductSlider} />
                <Route exact path={constants.BASE_URL+"/builder/announcement"} component={AnnouncementBar} />
                <Route exact path={constants.BASE_URL+"/builder/navigation"} component={Navigation} />
                <Route exact path={constants.BASE_URL+"/launcher"} component={Settings} />
                <Route path={constants.BASE_URL+"/"} component={HomeScreen} />
            </Switch>
        </Router>
    )
}
export const GlobalScreenRoute = () => {
    return (
        <Router history={Router}>
            <Route exact path="/globalsettings" component={GloabalScreen} />
        </Router>
    )
}