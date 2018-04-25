class RenameStripeAccountToUsers < ActiveRecord::Migration
  def change
    rename_column :users, :stripe_account, :stripe_account_type
  end
end
