class Pokemon < ApplicationRecord
    has_many :details
    has_many :comments
end
