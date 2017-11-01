class Game < ApplicationRecord
  has_many :game_ships
  has_many :ships, through: :game_ships
  # belongs_to :player_id

  belongs_to :player1, class_name: "Player", foreign_key: "player1_id"
  belongs_to :player2, class_name: "Player", foreign_key: "player2_id"
  belongs_to :winner, class_name: "Player", foreign_key: "winner_id"
end