#  @songs.each do |song|
#   json.partial! 'api/songs/song', song: song
# end

json.array! @songs, partial: 'api/songs/song', as: :song
