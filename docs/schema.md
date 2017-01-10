# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
prof_pic_url    | string    |
panel_url       | string    |
bio             | string    |

## Songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique
song_url        | string    | not null
song_img_url    | string    | indexed, default: stock_image.png
user_id         | integer   | not null, indexed, foreign key (references users)

## Comments
column name      | data type  | details
-----------------|------------|-------------------------
id               | integer    | not null, primary key
body             | string     | not null
user_id          | integer    | not null, foreign key (references users), indexed
song_id          | integer    | not null, foreign key (references songs), indexed

##Bonus - Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not_null, foreign key (references users), indexed
song_id     | integer   | not_null, foreign key (references songs), indexed
