#!/bin/bash

# Get today's date
TODAY=$(date +%Y-%m-%d)
YEAR=$(date +%Y)
MONTH=$(date +%m)
DAY=$(date +%d)
DATE_FORMATTED=$(date +"%d %b %Y")

# Define the base directory
BASE_DIR="./src/pages/posts/$YEAR/$MONTH"

# Create the directory structure if it doesn't exist
mkdir -p $BASE_DIR

# Define the file name
FILE_NAME="new-post-$TODAY.mdx"
FILE_PATH="$BASE_DIR/$FILE_NAME"

# Create the file and add the stubbed content
cat <<EOL > $FILE_PATH
---
title: "new post $TODAY"
description: "new post"
publishDate: "$DATE_FORMATTED"
updatedDates: []
layout: ../../../../layouts/BlogPost.astro
---
EOL

echo "New post created at $FILE_PATH"
echo "all done 😸"