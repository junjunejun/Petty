class RemoveUsersToName < ActiveRecord::Migration
  def change
    remove_column :names, :name, :string
  end
end
