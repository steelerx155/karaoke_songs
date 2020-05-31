class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :genre_id, :lyrics
  belongs_to :genre
end
