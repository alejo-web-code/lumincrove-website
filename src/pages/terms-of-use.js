import React from 'react';
import Layout from "../components/layout";
import Helmet from 'react-helmet';

const TermsOfUsePage = () => {
    return (
        <Layout>
            <Helmet>
                <html lang="en-US" />
                <title>Privcy Policy</title>
                <meta
                    name="description"
                    content="This is the privacy policy of Lumincrove company"
                />
            </Helmet>
        </Layout>
    )
}

export default TermsOfUsePage;