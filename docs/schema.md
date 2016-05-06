# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host?       | boolean   | not null, default: false
user_id     | integer   | not null, foreign key (references user), indexed

## adventure
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
lng         | float     | not null
lat         | float     | not null



## User Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
pic_url     | string    | not null



## profile_info
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
profile_id         | integer   | not null, foreign key (references profile), indexed
age                | integer   |
sex                | string    |
interests          | text      | not null, default: 0


## Messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
sender_id   | integer   | not null, foreign key (references users), indexed
recip_id    | string    | not null, foreign key (references users), indexed
subject     | string    |
body        | text      |



## Booking
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
pending       | boolean   | not null, default: true
user_id       | integer   | not null, foreign key (references users), indexed
adventure_id  | integer   | not null, foreign key (references adventure), indexed
