# Allegro

Future Heroku link

## Minimum Viable Product
Allegro is a web application for uploading and streaming user-created music, inspired by SoundCloud. It will be built using a Ruby/Rails backend with a React/Redux frontend. By the end of Week 9, this app will satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and quality CSS styling:

- Hosting on Heroku
- Account creation and login, including a demo login and user profile pages
- Songs, with continuous play while browsing
- Comments
- Search
- Infinite Scroll

## Design DOCS
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

## Implementation Timeline

### Phase 1: Backend and Auth (1 day)
- [ ] Users model
- [ ] Users / Sessions controllers
- [ ] AuthForm component


### Phase 2: Songs (4 days)
- [ ] Songs model
- [ ] Songs controller
- [ ] NewSongForm component
- [ ] Audio playback (on track pages)
- [ ] Art upload
- [ ] AudioPlayer component
- [ ] Continuous playback

### Phase 3: User Profile Page (1 day)
- [ ] Picture upload
- [ ] Edit bio

### Phase 4: Comments (2 days)
- [ ] Comments model
- [ ] Comments controller
- [ ] Comments Redux cycle
- [ ] Comments show up on song pages and update on submit

### Phase 5: Search (2 days)
- [ ] Search component
- [ ] Search makes backend query
- [ ] Search searches both users and tracks and displays both on same container

### Bonus features (TBD)
- [ ] Waveforms for songs
- [ ] Likes
