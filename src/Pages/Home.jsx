import React from 'react';
import Jumbotron from "../components/Jumbotron/Jumbotron"
import PostSection from "../components/PostSection/PostSection"
import HelperSection from "../components/HelperSection/HelperSection"

import Content from "../components/Content/Content"
const Home = () => {
    return (
        <React.Fragment>
        <Jumbotron />
        <Content>
            <PostSection />
            <HelperSection />
        </Content>
        </React.Fragment>
    );
}

export default Home;
