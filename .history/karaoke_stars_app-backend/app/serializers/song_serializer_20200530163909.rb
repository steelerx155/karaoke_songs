class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes
  :title, :lyrics, :genre_id
end
