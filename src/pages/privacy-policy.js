import React from 'react';
import Layout from "../components/layout";
import Helmet from 'react-helmet';

const PrivacyPolicyPage = () => {
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
            <section className="padding-top padding-bottom padding-left padding-right margin-bottom responsive">
                <h1 className="text-center margin-bottom-small text-bold">Privacy Policy</h1>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <p>This Privacy Policy establishes the terms in which the Company uses and protects the information that is provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill in the fields of personal information with which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize that you continually review this page to ensure that you agree with said changes.</p>
                </div>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <h3 className="margin-bottom-tiny text-bold">Information that is collected</h3>
                    <p>Our website may collect personal information such as: name, contact information such as your email address and demographic information. Likewise, when necessary, specific information may be required to process an order or make a delivery or billing.</p>
                </div>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <h3 className="margin-bottom-tiny text-bold">Use of collected information</h3>
                    <p className="margin-bottom-tiny">Our website uses the information in order to provide the best possible service, particularly to maintain a register of users, orders if applicable, and improve our products and services. It is possible that emails will be sent periodically through our site with special offers, new products and other advertising information that we consider relevant to you or that may provide you with some benefit, these emails will be sent to the address you provide and may be canceled anytime.</p>
                    <p>Company is highly committed to fulfill the commitment to keep your information secure. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.</p>
                </div>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <h3 className="margin-bottom-tiny text-bold">Cookies</h3>
                    <p className="margin-bottom-tiny">A cookie refers to a file that is sent in order to request permission to be stored on your computer, by accepting said file it is created and the cookie then serves to have information regarding web traffic, and also facilitates future visits to a web recurrent. Another function that cookies have is that with them the web can recognize you individually and therefore provide you with the best personalized service on its web.</p>
                    <p>Our website uses cookies to identify the pages that are visited and their frequency. This information is used only for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer. However, cookies help to provide a better service on websites, you do not give access to information from your computer or from you, unless you want it and provide it directly. You can accept or deny the use of cookies, however most browsers automatically accept cookies as it serves to have a better web service. You can also change your computer settings to decline cookies. If they decline, you may not be able to use some of our services.</p>
                </div>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <h3 className="margin-bottom-tiny text-bold">Links to Third Parties</h3>
                    <p>This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy or the protection of your data on those other third party sites. These sites are subject to their own privacy policies so it is recommended that you consult them to confirm that you agree with them.</p>
                </div>
                <div className="padding-bottom-small w-50 m-h-auto">
                    <h3 className="margin-bottom-tiny text-bold">Control of your personal information</h3>
                    <p className="margin-bottom-tiny">At any time you can restrict the collection or use of personal information that is provided to our website. Every time you are asked to fill in a form, such as user registration, you can check or uncheck the option to receive information by email. In case you have marked the option to receive our newsletter or advertising, you can cancel it at any time.</p>
                    <p>This company will not sell, assign or distribute the personal information that is collected without your consent, unless required by a judge with a court order.</p>
                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicyPage;