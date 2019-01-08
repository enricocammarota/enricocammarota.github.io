[#assign maxTweetsAllowed = model.maxTweetsAllowed /]
[#assign dataScreenName = model.dataScreenName /]
[#assign accountNameURL = model.accountNameURL /]

<a class="twitter-timeline" href="https://twitter.com/${accountNameURL}" data-widget-id="1234567890"
data-screen-name="${dataScreenName}" data-chrome="nofooter" data-tweet-limit="${maxTweetsAllowed}"></a>

    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
            (document,"script","twitter-wjs");</script>