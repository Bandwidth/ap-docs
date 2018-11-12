{% raw %}

<script type="text/javascript">
var count = 10;
var redirect = "https://dev.bandwidth.com/v2-messaging";

function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "This page will redirect in "+count+" seconds.";
        setTimeout("countDown()", 1000);
    }else{
        window.location.href = redirect;
    }
}
</script>

The Messaging v2 Reference documentation has moved to <a href="https://dev.bandwidth.com/v2-messaging">https://dev.bandwidth.com/v2-messaging</a>. Please update your bookmarks.
<br>

<span id="timer"/>
<script type="text/javascript">countDown();</script>

{% endraw %}
