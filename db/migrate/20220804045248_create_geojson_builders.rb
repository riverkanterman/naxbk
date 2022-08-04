class CreateGeojsonBuilders < ActiveRecord::Migration[7.0]
  def change
    create_table :geojson_builders do |t|

      t.timestamps
    end
  end
end
