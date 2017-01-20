# Allegro
[Allegro.audio][allegro.audio] is a full-stack web application designed for users to upload and share music with others. It is inspired by SoundCloud and is built using a Ruby on Rails backend, a PostgreSQL database, and a React.js/Redux framework on the frontend.

![Allegro sign-in page: http://www.allegro.audio][./docs/screenshots/signin.png "Allegro sign-in page"]

## Features
- User authentication and profiles.
- Continuous playback of current song across all pages.

![Allegro home page: http://www.allegro.audio/#/home][./docs/screenshots/homepage.png "Allegro home page"]

  The audio player is made of several React components built around the React Sound component in order to provide visual feedback and control for the user.

- Users can upload their own tracks
- Songs have their own pages where users can leave comments.

![Allegro song page example: http://www.allegro.audio/#/song/22][./docs/screenshots/songpage.png "Allegro example song page"]

- Users have their own profile page which is customizable and displays their uploaded songs.

![Allegro user profile example: http://www.allegro.audio/#/user/10][./docs/screenshots/userpage.png "allegro example user page"]

## Backend
- Allegro is powered by Ruby on Rails, and is hosted on Heroku. It provides RESTful APIs and responds with JSON data from the database.
- The database is run on PostgreSQL, and consists of 3 main tables: Users, Songs, and Comments. Songs and Comments are joined to Users by user_id, and Comments are joined to Songs by song_id.
- Audio and image files are stored externally through Cloudinary.
- BCrypt is used for password-salting and hashing for a secure authentication system.

## Frontend
- Allegro is built as a single page application by utilizing the React.js framework and Redux architecture.
- Node package manager (npm) is used to install all frontend dependencies
- Webpack is used to bundle all the frontend components together.
- jQuery is used to make AJAX requests to the server and to allow the user the ability to click adjust the music player.

## Future Implementations
There are several features I have in mind for Allegro to be added in the future:

- Waveforms for audio files
- User likes
- User playlists
- Ability for users to follow other users
