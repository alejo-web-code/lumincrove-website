const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const templates = {
        Services: path.resolve(`src/templates/services.js`),
    };

    const allPages = await graphql(`
    	{
    		allMarkdownRemark(limit: 1000) {
    			edges {
    				node {
    					id
    					frontmatter {
    						path
    						template
    					}
    				}
    			}
    		}
    	}
    `);

    // Handle errors
    if (allPages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    allPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: templates[node.frontmatter.template],
            context: {} // additional data can be passed via context
        });
    });
};

// turn off sourcemaps in production build no longer works
exports.onCreateWebpackConfig = ({ actions, stage }) => {
    // If production JavaScript and CSS build
    if (stage === 'build-javascript') {
        // Turn off source maps
        actions.setWebpackConfig({
            devtool: false
        });
    }
};
