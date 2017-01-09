## Component Heirarchy

### AuthFormContainer
  * AuthForm

### HomeContainer
  * Header
    * Search
      * SearchResultsContainer
        * SongSearchResults
        * UserSearchResults
  * SongsContainer
    * SongsIndex
    * SongsIndexItem
  * AudioPlayerContainer

### UserContainer
  * UserPanel
  * UserBio
  * UserSongsContainer
    * UserSongsIndex
    * UserSongsIndexItem

### SongContainer
  * SongPanel
  * CommentsContainer
    * NewCommentInput
    * CommentsIndex
    * CommentsIndexItem

### AudioPlayerContainer
    * AudioPlayer

### NewSongContainer
  * NewSongForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up"    | "AuthForm"  |
| "/sign-in"    | "AuthForm"  |
| "/home"     | "HomeContainer"    |
| "/user/:id"    | "UserContainer"   |
| "/upload"     | "NewSongContainer"|
| "/song/:id"  | "SongsContainer"     |
