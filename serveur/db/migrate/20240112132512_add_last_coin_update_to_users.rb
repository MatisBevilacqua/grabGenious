class AddLastCoinUpdateToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :last_coin_update, :datetime
  end
end
