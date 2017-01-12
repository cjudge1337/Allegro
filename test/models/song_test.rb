# == Schema Information
#
# Table name: songs
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  song_url     :string           not null
#  song_img_url :string           default("http://res.cloudinary.com/diqwtxdmo/image/upload/v1484181396/arm-sound-retro-audio-19951_asrlr6.jpg")
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
