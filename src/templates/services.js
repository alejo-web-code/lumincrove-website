import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function Template({
    data    // this prop will be injected by the GraphQL query below.
}) {
    return (
        <Layout>
            {data.markdownRemark.frontmatter.services.map((item, index) => {
                return (
                    <div>
                        {item.title}
                    </div>
                )
            })}
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                title
                metaDescription
                headingTitle
                subtitle
                services {
                    title
                    items {
                        name
                        value
                    }
                }
            }
        }
    }
`;
