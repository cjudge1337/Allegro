class AddSongPanelImgUrlToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :song_panel_img_url, :string, default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png"
    add_column :songs, :artist, :string, null: false
  end
end
