class AddSongIdToGenre < ActiveRecord::Migration[6.0]
  def change
    add_column :genres, :song_id, :integer
  end
end
