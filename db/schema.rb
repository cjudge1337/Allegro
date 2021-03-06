# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170118232531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.integer  "user_id",    null: false
    t.integer  "song_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_comments_on_song_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",                                                                                                                              null: false
    t.string   "song_url",                                                                                                                           null: false
    t.string   "song_img_url",       default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484181396/arm-sound-retro-audio-19951_asrlr6.jpg"
    t.integer  "user_id",                                                                                                                            null: false
    t.datetime "created_at",                                                                                                                         null: false
    t.datetime "updated_at",                                                                                                                         null: false
    t.string   "song_panel_img_url", default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png"
    t.string   "artist",                                                                                                                             null: false
    t.index ["song_img_url"], name: "index_songs_on_song_img_url", using: :btree
    t.index ["title"], name: "index_songs_on_title", using: :btree
    t.index ["user_id"], name: "index_songs_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                            null: false
    t.string   "password_digest",                                                                                                                     null: false
    t.string   "session_token",                                                                                                                       null: false
    t.string   "profile_pic_url", default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484521698/guitar-1245856_1280_nhv8yl.jpg"
    t.string   "panel_url",       default: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484782097/piano-keyboard-keys-music-54615_k0awan.jpg"
    t.text     "bio"
    t.datetime "created_at",                                                                                                                          null: false
    t.datetime "updated_at",                                                                                                                          null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

  add_foreign_key "comments", "songs"
  add_foreign_key "comments", "users"
end
