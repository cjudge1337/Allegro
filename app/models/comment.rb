class Comment < ApplicationRecord
  validates :body, :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song,
    class_name: :Song,
    foreign_key: :song_id,
    primary_key: :id
end
