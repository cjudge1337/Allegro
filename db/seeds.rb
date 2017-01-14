# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Guest", password: 123456)
User.create(username: "carson", password: 123456)

Song.create(title: "Test",
  song_url:
   "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484285637/f85n0oz7shole7ssnyrq.mp3",
  song_img_url:
   "http://res.cloudinary.com/diqwtxdmo/image/upload/w_200,h_200,c_fit/v1484285587/tq4ctuud9nfejhc99i6r.png")
