class RemoveTableSongs < ActiveRecord::Migration[6.0]
  def change
    drop_table :songs
    t.string :title
    t.string :lyrics
    t.integer :genre_id
    t.string :genre
  end
end
