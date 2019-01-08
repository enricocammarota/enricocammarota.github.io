---
layout: post
title:  "Twitter feeds integration in Magnolia 5.3.7"
date:   2019-01-08 00:15:00
author:	"Enrico Cammarota"
categories: blog
---

<h3>Twitter feeds integration in Magnolia 5.3.7</h3>

![Magnolia Logo](https://commercetools.com/wp-content/uploads/2018/07/magnolia-logo.png "Magnolia Logo")

Social media integration is an important part of any website today. In 2016 the concept of ‘online sharing’ has become 
one of the key activities in life and this is why recently one of our customers decided to integrate a Twitter timeline 
into its website. But how should you integrate a Twitter Timeline into your website when using Magnolia as the underlying CMS platform?

In first instance what needs to be done is the creation of the timeline widget using your Twitter account. So it’s 
mandatory to log in into your Twitter account and, once you’re on the Home, navigate to the **Account Settings** and then 
from the sidebar select **Widgets**. 

By clicking on the **Create new** button in the middle of the screen, you’ll be taken to another screen that will contain 
the widget’s script:

IMAGE 1

In this page you’ll be able to customize small parts of the final widget such as **username, theme, height** and so on.
On the right hand side of the page you’ll also see a preview of the final result so you’ll be able to adjust the options 
according to you needs. 

**Congratulations, you have just created your Twitter Timeline Widget!**

It is now time to face the real “challenge”: integrating the newly created widget into Magnolia and making it work properly. 
The idea is to embed the Timeline script within an FTL template in order to be able to put it anywhere within the website. 

Due to our customer’s requirements we’ve been forced to implement a more customizable and “dynamic” behaviour of the component. 
For this reason, some parts of the HTML code that is part of the script have been made dynamic, so their values may vary 
according to our customer needs.

The final FTL is then as follows:

<pre><code>

    [#assign maxTweetsAllowed = model.maxTweetsAllowed /]
    [#assign dataScreenName = model.dataScreenName /]
    [#assign accountNameURL = model.accountNameURL /]
    
    <a class="twitter-timeline" href="https://twitter.com/${accountNameURL}" data-widget-id="697464007863705601" 
        data-screen-name="${dataScreenName}" data-chrome="nofooter" data-tweet-limit="${maxTweetsAllowed}"></a>
        
     <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs); 
    (document,"script","twitter-wjs");</script>

</code></pre>

Based on this FTL, the resulting model class will be:

<code><pre>
    
    public class TwitterComponentModel<RD extends TemplateDefinition> extends GenerciListModel<TemplateDefinition> {
        private String accountNameURL;
        private String dataScreenName;
        private String maxTweetsAllowed;
        
        public TwitterComponentModel(Node content, TemplateDefinition definition, RenderingModel<?> parent, 
                                        STKTemplatingFunctions stkFunctions, TemplatingFunctions templatingFunctions) {   
        
            super(content, definition, parent, stkFunctions, templatingFunctions);	
            
            accountNameURL = PropertyUtil.getString(content, "twitterAccountName");
            
            dataScreenName = accountNameURL;
            
            maxTweetsAllowed = PropertyUtil.getString(content, "maxPostsDisplayed");
            
        }
        
        public String getAccountNameURL() {
            return accountNameURL;
        }
        
        public String getDataScreenName() {
            return dataScreenName;
        }
        
        public String getMaxTweetsAllowed() {
            return maxTweetsAllowed;
        }        
    }

</code></pre>

The **PropertyUtil** class will be used to take the actual values that the user will add in the Magnolia edit dialog of 
that component. Note that it’s also possible to add field validators but that is out of the scope of this guide. For 
related documentation please visit: [Magnolia Documentation](https://documentation.magnolia-cms.com/display/DOCS/Field+validators)

Now it is time to deploy the code and run Magnolia to set up the structure for this brand new component.

First of all, let’s navigate to the **Template Definition** app and create a reference to the code written before by creating 
a new template component:

Image 2

Once we’ve done this, it is time to specify a proper **dialog** box for the new Twitter component:

Image 3

And to add it in the **availableComponents** list of the specific area that will include it:

Image 4

If everything is properly configured, you should be able to add the new Twitter component by navigating to the **Page Template**
updated before.

Image 5

Once selected, you’ll be moved to the dialog box created above:

Image 6

And finally the Twitter component will be displayed:

Image 7

**Congratulations, you integrated a Twitter timeline into your website!**

If you'd like to learn more please consider having a look at:

[Twitter API - OAuth](https://dev.twitter.com/oauth)<br>
[Twitter API Rest - Public](https://dev.twitter.com/rest/public) 

**That's all folks, thanks for reading this post!**<br>
In case of any questions please, don't hesitate in emailing me at **cammarota.en@gmail.com**. 

Enrico.
