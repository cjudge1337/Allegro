class ChangeColumnPanelUrl < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :panel_url, :string, :default => "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484519755/tech-870970_1280_g9geei.png"
  end
end
