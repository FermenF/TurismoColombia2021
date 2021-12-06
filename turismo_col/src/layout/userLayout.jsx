import React from "react";
import { Route, Switch} from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function userLayout(props){
    
    const { routes } = props;

    return(
        <div>
            <Header/>
                <section>
                    <LoadRoutes routes={routes} />
                </section>
            <Footer/> 
        </div>
    )
}

function LoadRoutes({routes}){
    return(
        <Switch>
        {
            routes.map((route, index) =>(
                <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component
                }/>
            ))
        }
    </Switch>
    );
    
}