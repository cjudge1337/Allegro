# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Guest", password: 123456, profile_pic_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484521698/guitar-1245856_1280_nhv8yl.jpg",
            panel_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png",
            bio: "Guest account.")
User.create(username: "carson", password: 123456, profile_pic_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/737/medium/Carson_Judge.jpg?1479424546",
            panel_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png",
            bio: "Super cool admin guy who likes music.")
Song.create(title: "Night Owl",
  song_url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484587463/u3ypfpmu4wjkn2uhupsp.mp3",
  song_img_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484586359/l4x8s0ifhv0lawxqygk5.jpg",
  user_id: 1,
  song_panel_img_url:
   "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png",
  artist: "Guest")
Song.create(title: "Dimension",
  song_url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484589003/exikknrutdjb1itoojtd.mp3",
  song_img_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484587552/pbt5df032un8cllrzkpk.jpg",
  user_id: 2,
  song_panel_img_url:
   "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png",
  artist: "carson")
Comment.new(body: "Test comment",
  user_id: 1,
  song_id: 1)
Comment.new(body: "Test comment 2",
  user_id: 2,
  song_id: 1)
