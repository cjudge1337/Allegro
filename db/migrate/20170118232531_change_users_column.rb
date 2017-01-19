class ChangeUsersColumn < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :panel_url, "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484782097/piano-keyboard-keys-music-54615_k0awan.jpg")
  end
end
