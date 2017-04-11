#!/usr/bin/python

import sys
import os

def main():
    branch_name = os.environ.get('TRAVIS_BRANCH')
    if branch_name == "master":
        sys.exit(0)
    site_name = 'bw-' + branch_name
    yaml_contents = "site: _book\ns3_bucket: " + site_name
    with open('.s3_website.yaml', 'w') as yaml_file:
        yaml_file.write(yaml_contents)


# Call the main() function to begin the program.
if __name__ == '__main__':
    main()