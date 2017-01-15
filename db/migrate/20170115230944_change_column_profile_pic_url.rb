class ChangeColumnProfilePicUrl < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :profile_pic_url, :string, :default => "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484521698/guitar-1245856_1280_nhv8yl.jpg"
  end
end
