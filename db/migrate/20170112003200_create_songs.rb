class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :song_url, null: false
      t.string :song_img_url, default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484181396/arm-sound-retro-audio-19951_asrlr6.jpg"
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :song_img_url
    add_index :songs, :user_id
  end
end
