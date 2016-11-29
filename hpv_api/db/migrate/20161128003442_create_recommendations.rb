class CreateRecommendations < ActiveRecord::Migration[5.0]
  def change
    create_table :recommendations do |t|
      t.string :content
      t.boolean :completed

      t.timestamps
    end
  end
end
