class RemoveOmniauthFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :name, :string
    remove_column :users, :image, :string
  end
end
