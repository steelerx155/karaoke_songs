class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title,
      t.string :lyrics,
      t.integer, :genre_id
     # t.string :belongs_to
      t.string :genre

      t.timestamps
    end
  end
end
