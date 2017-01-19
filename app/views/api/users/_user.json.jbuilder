# json.extract! user, :username, :password_digest, :session_token, :profile_pic_url,
#   :panel_url, :bio
  json.id user.id
  json.username user.username
  json.password_digest user.password_digest
  json.session_token user.session_token
  json.profile_pic_url user.profile_pic_url
  json.panel_url user.panel_url
  json.bio user.bio
  json.songs user.songs
