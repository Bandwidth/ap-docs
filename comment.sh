# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    echo "Commenting on Pull Request"
    export TRAVIS_BOT_NO_RESULTS_MSG="http://$TRAVIS_BRANCH".s3-website-us-east-1.amazonaws.com/
    travis_bot
    exit 0
fi