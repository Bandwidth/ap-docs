echo "site: _book\ns3_bucket: $TRAVIS_BRANCH" > .s3_website.yaml
echo "http://$TRAVIS_BRANCH".s3-website-us-east-1.amazonaws.com/